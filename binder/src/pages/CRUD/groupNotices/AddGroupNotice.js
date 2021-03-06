import GroupNoticesForm from "../../../components/GroupNoticeForm";
import { addNewGroupNotice } from '../../../firebase/groupNotices';
const AddGroupNotice = () =>{
    const onSubmit = async values =>{
        const ppl = values.people.trim().split(";");
        const emails = values.emails.trim().split(";");
        const dataToSet = {
            groupName: values.groupName,
            course: values.course,
            description: values.description,
            people: emails.map( (email, it) =>({email, name: ppl[it]} ) ),
        };
        console.log(dataToSet);
        await addNewGroupNotice(dataToSet);
        alert("Dodano nową grupę");
    };
    return(
        <GroupNoticesForm  title={"Dodaj nowe ogłoszenie "} onSubmit={onSubmit} isEdit={false} />
    );
};
export default AddGroupNotice;