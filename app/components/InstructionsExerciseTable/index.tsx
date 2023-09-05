import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import logoIcon from "../../../public/logo icon.png"
import example from "../../../public/Captura de tela de 2023-08-24 23-35-03.png"
import Image from "next/image";

const InstructionsExerciseTable = () => {
    return (
        <div>
            <h2 className="text-2xl mb-2">Instructions:</h2>
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
                            Exercise 00
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
                            Turn-in directory:
                        </TableCell>
                        <TableCell>
                            ex00/
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Files to turn in:
                        </TableCell>
                        <TableCell>
                            z
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Allowed Functions:
                        </TableCell>
                        <TableCell>
                            False
                        </TableCell>
                    </TableRow>
                    <TableRow className="border">
                        <TableCell>
                            Example:
                        </TableCell>
                        <TableCell>
                            <Image src={example} alt=""/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default InstructionsExerciseTable