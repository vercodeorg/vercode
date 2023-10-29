import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import logoIcon from "../../../public/logo icon.png"
import Image from "next/image";

type TypeProps = {
    title: string | undefined,
    dirName: string | undefined,
    files: string[] | undefined,
    allowedFunctions: string[] | undefined,
    example: string | undefined,
}

const InstructionsExerciseTable = (props: TypeProps) => {
    return (
        <div>
            <h2 className="text-2xl mb-2">Instruções:</h2>
            <Table hideHeader aria-label="Example table with dynamic content">
                <TableHeader>
                    <TableColumn>
                    </TableColumn>
                    <TableColumn>
                    </TableColumn>
                </TableHeader>
                <TableBody className="border">
                    <TableRow className="border">
                        <TableCell>
                            <Image src={logoIcon} alt="" />
                        </TableCell>
                        <TableCell className="text-black">
                            {props.title}
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>

                        </TableCell>
                        <TableCell>
                            Only the best know how to display Z
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Diretório para envio:
                        </TableCell>
                        <TableCell>
                            {props.dirName}
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Arquivos para envio:
                        </TableCell>
                        <TableCell>
                            {props.files}
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Funções permitidas:
                        </TableCell>
                        <TableCell>
                            {props.allowedFunctions}
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Exemplo:
                        </TableCell>
                        <TableCell>
                            <img width={100} height={100} src={props?.example} alt="" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default InstructionsExerciseTable
