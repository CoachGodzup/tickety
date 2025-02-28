import { loadFile, saveFile } from "@/service/file";
import { uploadCards } from "@/store/card.reducer";
import { RootState } from "@/store/root.store";
import { Button, Flex } from "@mantine/core"
import { IconDownload, IconUpload } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

export const Download: React.FC = () => {
    const store = useSelector((state: RootState) => state.cards);
    const dispatch = useDispatch();

    const handleDownload = () => {
        console.log('Download')
        saveFile(store, `tickety-${Date.now()}`)
    }

    const handleUpload = () => {
        console.log('Upload')
        loadFile((cards) => {
            dispatch(uploadCards(cards || []));
        });
    }

    return <Flex gap="md">
        <Button variant="transparent" onClick={handleDownload}><IconDownload></IconDownload></Button>
        <Button variant="transparent" onClick={handleUpload}><IconUpload /></Button>
    </Flex>
}