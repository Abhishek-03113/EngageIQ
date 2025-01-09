import { Button } from "./ui/button";


export default function AnalyzeButton({ onClick, label }) {
    return (
        <Button onClick={onClick} className="ml-2">
            {label}
        </Button>
    );
}
