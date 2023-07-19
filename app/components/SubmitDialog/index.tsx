import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../Button';

const SubmitDialog = () => {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <div className="w-48 mt-8">
                    <Button>Submit</Button>
                </div>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialog.Title className="dialog-title">
                        Are you want to submit?
                    </AlertDialog.Title>
                    <div className="flex justify-end gap-[25px]">
                        <AlertDialog.Cancel asChild>
                            <button className="text-gray-500 bg-gray-200 hover:bg-gray-300 focus:shadow-gray-500 dialog-button">
                                Cancel
                            </button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <button className="text-red-800 bg-red-300 hover:bg-red-400 focus:shadow-red-800 dialog-button">
                                Submit
                            </button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}
export default SubmitDialog