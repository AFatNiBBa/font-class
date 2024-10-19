
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=light sim-card}
 * @preview ![sim-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU0IDEwOS4yNTRMMjc0Ljc0NiAxOC43NDRDMjYyLjc0MiA2Ljc0MiAyNDYuNDY1IDAgMjI5LjQ5IDBINjRDMjguODAxIDAgMCAyOC43OTkgMCA2NFY0NDhDMCA0ODMuMTk5IDI4LjgwMSA1MTIgNjQgNTEySDMyMEMzNTUuMTk5IDUxMiAzODQgNDgzLjE5OSAzODQgNDQ4VjE1NC41MUMzODQgMTM3LjUzNSAzNzcuMjU4IDEyMS4yNTYgMzY1LjI1NCAxMDkuMjU0Wk0zNTIgNDQ4QzM1MiA0NjUuNiAzMzcuNiA0ODAgMzIwIDQ4MEg2NEM0Ni40IDQ4MCAzMiA0NjUuNiAzMiA0NDhWNjRDMzIgNDYuNCA0Ni40IDMyIDY0IDMySDIyOS40OTZDMjM3Ljk4MiAzMiAyNDYuMTIxIDM1LjM3MSAyNTIuMTIzIDQxLjM3M0wzNDIuNjI3IDEzMS44NzdDMzQ4LjYyOSAxMzcuODc5IDM1MiAxNDYuMDE4IDM1MiAxNTQuNTA0VjQ0OFpNMjcyIDE5MkgxMTJDODUuNSAxOTIgNjQgMjEzLjUgNjQgMjQwVjQwMEM2NCA0MjYuNSA4NS41IDQ0OCAxMTIgNDQ4SDI3MkMyOTguNSA0NDggMzIwIDQyNi41IDMyMCA0MDBWMjQwQzMyMCAyMTMuNSAyOTguNSAxOTIgMjcyIDE5MlpNMTY4IDIyNEgyMTZWMjY0SDE2OFYyMjRaTTk2IDI0MEM5NiAyMzEuMjUgMTAzLjI1IDIyNCAxMTIgMjI0SDEzNlYyNjRIOTZWMjQwWk0xMzYgNDE2SDExMkMxMDMuMjUgNDE2IDk2IDQwOC43NSA5NiA0MDBWMzc2SDEzNlY0MTZaTTIxNiA0MTZIMTY4VjM3NkgyMTZWNDE2Wk0yODggNDAwQzI4OCA0MDguNzUgMjgwLjc1IDQxNiAyNzIgNDE2SDI0OFYzNzZIMjg4VjQwMFpNMjg4IDM0NEg5NlYyOTZIMjg4VjM0NFpNMjg4IDI2NEgyNDhWMjI0SDI3MkMyODAuNzUgMjI0IDI4OCAyMzEuMjUgMjg4IDI0MFYyNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SimCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.254 109.254L274.746 18.744C262.742 6.742 246.465 0 229.49 0H64C28.801 0 0 28.799 0 64V448C0 483.199 28.801 512 64 512H320C355.199 512 384 483.199 384 448V154.51C384 137.535 377.258 121.256 365.254 109.254ZM352 448C352 465.6 337.6 480 320 480H64C46.4 480 32 465.6 32 448V64C32 46.4 46.4 32 64 32H229.496C237.982 32 246.121 35.371 252.123 41.373L342.627 131.877C348.629 137.879 352 146.018 352 154.504V448ZM272 192H112C85.5 192 64 213.5 64 240V400C64 426.5 85.5 448 112 448H272C298.5 448 320 426.5 320 400V240C320 213.5 298.5 192 272 192ZM168 224H216V264H168V224ZM96 240C96 231.25 103.25 224 112 224H136V264H96V240ZM136 416H112C103.25 416 96 408.75 96 400V376H136V416ZM216 416H168V376H216V416ZM288 400C288 408.75 280.75 416 272 416H248V376H288V400ZM288 344H96V296H288V344ZM288 264H248V224H272C280.75 224 288 231.25 288 240V264Z" />
        </Icon>
    </>
}