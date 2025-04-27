import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";

type Props = {
    fileName: string;
    changeFile:(file:File)=>void
};
export default function SharedUploadFile({ fileName, changeFile }: Props) {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e:any) => {
       setSelectedImg(null)
       setSelectedFileName(null)
        const file = e.target.files[0];
        const fileName = file.name;
        const fileType = file.type;

        if (fileType.includes("image") && file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // @ts-ignore
                setSelectedImg(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedFileName(fileName);
        }
        changeFile(file)
    };

    const close = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        // <div>
            <div className="text-secondary-500 text-sm ">
                <div className="outline-input  relative bg-white px-5 h-10 flex justify-between items-center mb-3 rounded-lg ">
                    <input required
                        onChange={handleInputChange}
                        type="file"
                        className="cursor-pointer opacity-0 absolute w-full h-full left-0 top-0"
                        id="uploadInput"
                    />
                    <span >{fileName}</span>
                    <span className="mdi mdi-tray-arrow-up text-primary ms-2"></span>
                </div>

                {selectedImg && (
                    <div className="px-3">
                        <div className="w-20 h-20  rounded-md overflow-hidden ring-1 ring-primary" onClick={openModal}>
                            <img
                                src={selectedImg}
                                className=" w-full h-full object-contain"
                                id="selectedImage"
                                alt=""
                            />
                        </div>

                        <Dialog
                            open={isOpen}
                            as="div"
                            className="relative z-10 focus:outline-none"
                            onClose={close}
                        >
                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full  items-center justify-center p-4">
                                    <DialogPanel
                                        transition
                                        className="w-full max-w-[400px]  rounded-xl bg-black/5 p-3 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                    >
                                        <div
                                            className="w-full h-full "
                                            onClick={openModal}
                                        >
                                            <img
                                                src={selectedImg}
                                                className=" w-full h-full object-contain"
                                                id="selectedImage"
                                                alt=""
                                            />
                                        </div>
                                    </DialogPanel>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                )}
                <span className="text-primary font-bold px-3">{selectedFileName}</span>
            </div>
        // </div>
    );
}
