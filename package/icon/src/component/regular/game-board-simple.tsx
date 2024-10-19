
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `game-board-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=regular game-board-simple}
 * @preview ![game-board-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDAwSDM2OFYyNTZIMjI0VjQwMFpNMzg0IDMySDY0QzI4LjgwMSAzMiAwIDYwLjgwMSAwIDk2VjQxNkMwIDQ1MS4xOTkgMjguODAxIDQ4MCA2NCA0ODBIMzg0QzQxOS4yMDEgNDgwIDQ0OCA0NTEuMTk5IDQ0OCA0MTZWOTZDNDQ4IDYwLjgwMSA0MTkuMjAxIDMyIDM4NCAzMlpNNDAwIDQxNkM0MDAgNDI0LjY3NCAzOTIuNjc0IDQzMiAzODQgNDMySDY0QzU1LjMyOCA0MzIgNDggNDI0LjY3NCA0OCA0MTZWOTZDNDggODcuMzI2IDU1LjMyOCA4MCA2NCA4MEgzODRDMzkyLjY3NCA4MCA0MDAgODcuMzI2IDQwMCA5NlY0MTZaTTgwIDExMlYyNTZIMjI0VjExMkg4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GameBoardSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 400H368V256H224V400ZM384 32H64C28.801 32 0 60.801 0 96V416C0 451.199 28.801 480 64 480H384C419.201 480 448 451.199 448 416V96C448 60.801 419.201 32 384 32ZM400 416C400 424.674 392.674 432 384 432H64C55.328 432 48 424.674 48 416V96C48 87.326 55.328 80 64 80H384C392.674 80 400 87.326 400 96V416ZM80 112V256H224V112H80Z" />
        </Icon>
    </>
}