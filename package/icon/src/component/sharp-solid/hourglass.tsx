
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-solid hourglass}
 * @preview ![hourglass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMEwwIDAgMCA2NGwzMiAwIDAgNjQgMCAxMy4zIDkuNCA5LjRMMTQ2LjcgMjU2IDQxLjQgMzYxLjQgMzIgMzcwLjcgMzIgMzg0bDAgNjRMMCA0NDhsMCA2NCAzMiAwIDMyMCAwIDMyIDAgMC02NC0zMiAwIDAtNjQgMC0xMy4zLTkuNC05LjRMMjM3LjMgMjU2IDM0Mi42IDE1MC42bDkuNC05LjQgMC0xMy4zIDAtNjQgMzIgMCAwLTY0TDM1MiAwIDMyIDB6TTI4OCA2NGwwIDUwLjctOTYgOTYtOTYtOTZMOTYgNjRsMTkyIDB6TTE5MiAzMDEuM2w5NiA5NiAwIDUwLjdMOTYgNDQ4bDAtNTAuNyA5Ni05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 0L0 0 0 64l32 0 0 64 0 13.3 9.4 9.4L146.7 256 41.4 361.4 32 370.7 32 384l0 64L0 448l0 64 32 0 320 0 32 0 0-64-32 0 0-64 0-13.3-9.4-9.4L237.3 256 342.6 150.6l9.4-9.4 0-13.3 0-64 32 0 0-64L352 0 32 0zM288 64l0 50.7-96 96-96-96L96 64l192 0zM192 301.3l96 96 0 50.7L96 448l0-50.7 96-96z" />
    </Icon>
);

export default Hourglass;