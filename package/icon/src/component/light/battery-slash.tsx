
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=light battery-slash}
 * @preview ![battery-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjUuOSAzLjRDMTktMiA4LjktLjggMy40IDYuMVMtLjggMjMuMSA2LjEgMjguNmw2MDggNDgwYzYuOSA1LjUgMTcgNC4zIDIyLjUtMi42czQuMy0xNy0yLjYtMjIuNUwyNS45IDMuNHpNMzc4LjggMzg0TDExMiAzODRjLTI2LjUgMC00OC0yMS41LTQ4LTQ4bDAtMTYwYzAtMTIgNC40LTIyLjkgMTEuNy0zMS40TDUwLjUgMTI0LjhDMzkgMTM4LjcgMzIgMTU2LjUgMzIgMTc2bDAgMTYwYzAgNDQuMiAzNS44IDgwIDgwIDgwbDMwNy40IDAtNDAuNS0zMnpNNDY0IDk2TDIyMC42IDk2bDQwLjUgMzJMNDY0IDEyOGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDE1MCAzMC43IDI0LjNjLjgtNC42IDEuMy05LjQgMS4zLTE0LjNsMC0xNjBjMC00NC4yLTM1LjgtODAtODAtODB6bTEyOCA5NmMtOC44IDAtMTYgNy4yLTE2IDE2bDAgOTZjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNmwwLTk2YzAtOC44LTcuMi0xNi0xNi0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM378.8 384L112 384c-26.5 0-48-21.5-48-48l0-160c0-12 4.4-22.9 11.7-31.4L50.5 124.8C39 138.7 32 156.5 32 176l0 160c0 44.2 35.8 80 80 80l307.4 0-40.5-32zM464 96L220.6 96l40.5 32L464 128c26.5 0 48 21.5 48 48l0 150 30.7 24.3c.8-4.6 1.3-9.4 1.3-14.3l0-160c0-44.2-35.8-80-80-80zm128 96c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default BatterySlash;