
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=sharp-duotone-solid crystal-ball}
 * @preview ![crystal-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGMwIDcxLjQgMzMuNCAxMzUgODUuNCAxNzZsMjc3LjIgMGM1Mi00MSA4NS40LTEwNC42IDg1LjQtMTc2QzQ0OCAxMDAuMyAzNDcuNyAwIDIyNCAwUzAgMTAwLjMgMCAyMjR6bTk2LTk2bDQ2LjctMTcuM0wxNjAgNjRsMTcuMyA0Ni43TDIyNCAxMjhsLTQ2LjcgMTcuM0wxNjAgMTkybC0xNy4zLTQ2LjdMOTYgMTI4em0xMTIgODBsNzAuMS0yNS45TDMwNCAxMTJsMjUuOSA3MC4xTDQwMCAyMDhsLTcwLjEgMjUuOUwzMDQgMzA0bC0yNS45LTcwLjFMMjA4IDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2Mi42IDQwMEg4NS40TDAgNTEySDQ0OEwzNjIuNiA0MDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 71.4 33.4 135 85.4 176l277.2 0c52-41 85.4-104.6 85.4-176C448 100.3 347.7 0 224 0S0 100.3 0 224zm96-96l46.7-17.3L160 64l17.3 46.7L224 128l-46.7 17.3L160 192l-17.3-46.7L96 128zm112 80l70.1-25.9L304 112l25.9 70.1L400 208l-70.1 25.9L304 304l-25.9-70.1L208 208z" />
            <path d="M362.6 400H85.4L0 512H448L362.6 400z" />
    </Icon>
);

export default CrystalBall;