
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-rows` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=regular table-rows}
 * @preview ![table-rows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjUyIDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1NCA0ODMuMzQ2IDMyIDQ0OCAzMkg2NEMyOC42NTIgMzIgMCA2MC42NTQgMCA5NlpNNDY0IDI4MFY0MTZDNDY0IDQyNC44MzcgNDU2LjgzNyA0MzIgNDQ4IDQzMkgxMTJWMjgwSDQ2NFpNNDQ4IDgwQzQ1Ni44MzcgODAgNDY0IDg3LjE2MyA0NjQgOTZWMjMySDExMlY4MEg0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TableRows(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 96V416C0 451.346 28.652 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32H64C28.652 32 0 60.654 0 96ZM464 280V416C464 424.837 456.837 432 448 432H112V280H464ZM448 80C456.837 80 464 87.163 464 96V232H112V80H448Z" />
        </Icon>
    </>
}