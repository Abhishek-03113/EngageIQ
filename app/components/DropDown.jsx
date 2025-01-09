import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const Dropdown = ({ value, onChange, options }) => {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-64">
                <SelectValue placeholder="Select a post type" />
            </SelectTrigger>
            <SelectContent>
                {options.map(option => (
                    <SelectItem key={option} value={option}>
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
export default Dropdown;