
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=sharp-solid house-flag}
 * @preview ![house-flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDBsMCAzMiAxMjggMCAwIDE2MC0xMjggMCAwIDMyMC02NCAwIDAtMzIwIDAtMTYwIDAtMzIgNjQgMHpNNDE2IDE2NS4yTDQxNiA1MTJsLTk2IDAgMC0xNjAtMTI4IDAgMCAxNjBMNjQuMSA1MTJsMC0yMjQuNEwwIDI4Ny42IDAgMjQwIDI1Ni40IDMyIDQxNiAxNjUuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 0l0 32 128 0 0 160-128 0 0 320-64 0 0-320 0-160 0-32 64 0zM416 165.2L416 512l-96 0 0-160-128 0 0 160L64.1 512l0-224.4L0 287.6 0 240 256.4 32 416 165.2z" />
    </Icon>
);

export default HouseFlag;