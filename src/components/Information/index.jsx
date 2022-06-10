import React from "react";
import { useModalWithData } from "../../helpers/modalHooks";
import ModalContent from "../Modal";
import Table from "../Table";

function Information(props) {
  const { modalOpen, selected, setSelected, setModalState } =
    useModalWithData();
  const { columns, data, modalTitle, components } = props;
  return (
    <>
      <ModalContent
        title={modalTitle}
        isActive={modalOpen}
        handleClose={() => setModalState(false)}
        body={components}
        data={selected}
        path={props.pathApi}
      >
        {props.children}
      </ModalContent>

      <Table
        path={props.pathApi}
        upload={props.upload}
        data={data}
        columns={columns}
        setSelected={setSelected}
        setModalState={setModalState}
      />
    </>
  );
}

export default Information;
