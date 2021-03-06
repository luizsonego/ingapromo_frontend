import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import React from "react";

function MainModal({ show }) {
    const [showModal, setShowModalCode] = React.useState(false);

    return (
        <>
        <Button
            color="lightBlue"
            type="button"
            onClick={(e) => setShowModalCode(true)}
            ripple="light"
        >
            Open small Modal
        </Button>

        <Modal size="sm" active={showModal} toggler={() => setShowModalCode(false)}>
            <ModalHeader toggler={() => setShowModalCode(false)}>
                Modal Title
            </ModalHeader>
            <ModalBody>
                <p className="text-base leading-relaxed text-gray-600 font-normal">
                    I always felt like I could do anything. That’s the main thing people
                    are controlled by! Thoughts- their perception of themselves! They're
                    slowed down by their perception of themselves. If you're taught you
                    can’t do anything, you won’t do anything. I was taught I could do
                    everything.
                </p>
            </ModalBody>
            <ModalFooter>
                <Button 
                    color="red"
                    buttonType="link"
                    onClick={(e) => setShowModalCode(false)}
                    ripple="dark"
                >
                    Close
                </Button>

                <Button
                    color="green"
                    onClick={(e) => setShowModalCode(false)}
                    ripple="light"
                >
                    Save Changes
                </Button>
            </ModalFooter>
        </Modal>
    </>
    );
}

export default MainModal;
