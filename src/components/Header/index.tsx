import { useState } from "react";
import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";
import Logo from "../../assets/logo.svg";

interface ModalProps {
    value: boolean;
}

function Header() {
    const [openModal, setOpenModal] = useState<ModalProps>(false);

    return (
        <Container>
            <header>
                <img src={Logo} alt="GoRestaurant" />
                <nav>
                    <div>
                        <button
                            type="button"
                            onClick={() => setOpenModal(true)}
                        >
                            <div className="text">Novo Prato</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
        </Container>
    );
}

// class Header extends Component {
//   render() {
//     const { openModal } = this.props;

//     return (
//       <Container>
//         <header>
//           <img src={Logo} alt="GoRestaurant" />
//           <nav>
//             <div>
//               <button
//                 type="button"
//                 onClick={openModal}
//               >
//                 <div className="text">Novo Prato</div>
//                 <div className="icon">
//                   <FiPlusSquare size={24} />
//                 </div>
//               </button>
//             </div>
//           </nav>
//         </header>
//       </Container>
//     )
//   }
// };

export default Header;
