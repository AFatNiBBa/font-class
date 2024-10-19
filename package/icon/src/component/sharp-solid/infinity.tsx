
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=sharp-solid infinity}
 * @preview ![infinity](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NmwyMDUuMyAwTDMyMCAyMTAuNyA0MzQuNyA5NiA2NDAgOTZsMCAzMjAtMjA1LjMgMEwzMjAgMzAxLjMgMjA1LjMgNDE2IDAgNDE2IDAgOTZ6TTI3NC43IDI1NmwtOTYtOTZMNjQgMTYwbDAgMTkyIDExNC43IDAgOTYtOTZ6bTkwLjUgMGw5NiA5Nkw1NzYgMzUybDAtMTkyLTExNC43IDAtOTYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l205.3 0L320 210.7 434.7 96 640 96l0 320-205.3 0L320 301.3 205.3 416 0 416 0 96zM274.7 256l-96-96L64 160l0 192 114.7 0 96-96zm90.5 0l96 96L576 352l0-192-114.7 0-96 96z" />
    </Icon>
);

export default Infinity;