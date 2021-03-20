import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import Food from "../../components/Food";
import ModalAddFood from "../../components/ModalAddFood";
import ModalEditFood from "../../components/ModalEditFood";
import { FoodsContainer } from "./styles";

interface FoodsProps {
    foods: string;
}

function DashBoard() {
    const [foods, setFoods] = useState<FoodsProps[]>([]);
    const [editingFood, setEditingFood] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/foods");
            setFoods({ foods: response.data });
        };
        fetchData();
    }, []);

    const handleAddFood = async (food) => {
        try {
            const response = await api.post("/foods", {
                ...food,
                available: true,
            });

            setFoods({ foods: [...foods, response.data] });
        } catch (err) {
            console.log(err);
        }
    };
}

export default DashBoard;
