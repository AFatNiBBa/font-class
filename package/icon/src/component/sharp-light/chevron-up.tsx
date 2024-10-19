
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-light chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDEwNS40bDExLjMgMTEuMyAxOTIgMTkyTDQ3MC42IDMyMCA0NDggMzQyLjZsLTExLjMtMTEuM0wyNTYgMTUwLjYgNzUuMyAzMzEuMyA2NCAzNDIuNiA0MS40IDMyMGwxMS4zLTExLjMgMTkyLTE5MkwyNTYgMTA1LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 105.4l11.3 11.3 192 192L470.6 320 448 342.6l-11.3-11.3L256 150.6 75.3 331.3 64 342.6 41.4 320l11.3-11.3 192-192L256 105.4z" />
    </Icon>
);

export default ChevronUp;