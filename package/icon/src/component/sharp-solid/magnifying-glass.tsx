
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=sharp-solid magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDE2IDIwOGMwIDQ1LjktMTQuOSA4OC4zLTQwIDEyMi43TDQ4Ni42IDQ0MS40IDUwOS4zIDQ2NCA0NjQgNTA5LjNsLTIyLjYtMjIuNkwzMzAuNyAzNzZjLTM0LjQgMjUuMi03Ni44IDQwLTEyMi43IDQwQzkzLjEgNDE2IDAgMzIyLjkgMCAyMDhTOTMuMSAwIDIwOCAwUzQxNiA5My4xIDQxNiAyMDh6TTIwOCAzNTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default MagnifyingGlass;