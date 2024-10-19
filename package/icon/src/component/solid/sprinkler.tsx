
import { Icon } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=solid sprinkler}
 * @preview ![sprinkler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTguMjUgMjU2SDI4OFY5NkMyODggNzguMzI3IDI3My42NzMgNjQgMjU2IDY0SDI1NkMyMzguMzI3IDY0IDIyNCA3OC4zMjcgMjI0IDk2VjI1NkgxMTMuNzVDMTA3LjEyNSAyNTYgMTAwLjg3NSAyNTkuNzUgOTcuODc1IDI2NS44NzVDOTQuODc1IDI3MS44NzUgOTUuNSAyNzkgOTkuNjI1IDI4NC41TDE2Ny4xMjUgMzYyLjYyNUwxOTIgMzg3LjVWNTEySDMyMFYzODcuNUwzNDQuODc1IDM2Mi42MjVMNDEyLjM3NSAyODQuNUM0MTYuNSAyNzkgNDE3LjEyNSAyNzEuODc1IDQxNC4xMjUgMjY1Ljg3NUM0MTEuMTI1IDI1OS43NSA0MDQuODc1IDI1NiAzOTguMjUgMjU2Wk0xNTIgMTUyQzE2NS4yNSAxNTIgMTc2IDE0MS4yNSAxNzYgMTI4UzE2NS4yNSAxMDQgMTUyIDEwNFMxMjggMTE0Ljc1IDEyOCAxMjhTMTM4Ljc1IDE1MiAxNTIgMTUyWk04OCA5NkMxMDEuMjUgOTYgMTEyIDg1LjI1IDExMiA3MlMxMDEuMjUgNDggODggNDhTNjQgNTguNzUgNjQgNzJTNzQuNzUgOTYgODggOTZaTTExMiAxODRDMTEyIDE3MC43NSAxMDEuMjUgMTYwIDg4IDE2MFM2NCAxNzAuNzUgNjQgMTg0Uzc0Ljc1IDIwOCA4OCAyMDhTMTEyIDE5Ny4yNSAxMTIgMTg0Wk0yNCAxMDRDMTAuNzUgMTA0IDAgMTE0Ljc1IDAgMTI4UzEwLjc1IDE1MiAyNCAxNTJTNDggMTQxLjI1IDQ4IDEyOFMzNy4yNSAxMDQgMjQgMTA0Wk0yNCAwQzEwLjc1IDAgMCAxMC43NSAwIDI0UzEwLjc1IDQ4IDI0IDQ4UzQ4IDM3LjI1IDQ4IDI0UzM3LjI1IDAgMjQgMFpNMjQgMjA4QzEwLjc1IDIwOCAwIDIxOC43NSAwIDIzMlMxMC43NSAyNTYgMjQgMjU2UzQ4IDI0NS4yNSA0OCAyMzJTMzcuMjUgMjA4IDI0IDIwOFpNMzYwIDE1MkMzNzMuMjUgMTUyIDM4NCAxNDEuMjUgMzg0IDEyOFMzNzMuMjUgMTA0IDM2MCAxMDRTMzM2IDExNC43NSAzMzYgMTI4UzM0Ni43NSAxNTIgMzYwIDE1MlpNNDI0IDE2MEM0MTAuNzUgMTYwIDQwMCAxNzAuNzUgNDAwIDE4NFM0MTAuNzUgMjA4IDQyNCAyMDhTNDQ4IDE5Ny4yNSA0NDggMTg0UzQzNy4yNSAxNjAgNDI0IDE2MFpNNDI0IDQ4QzQxMC43NSA0OCA0MDAgNTguNzUgNDAwIDcyUzQxMC43NSA5NiA0MjQgOTZTNDQ4IDg1LjI1IDQ0OCA3MlM0MzcuMjUgNDggNDI0IDQ4Wk00ODggMTA0QzQ3NC43NSAxMDQgNDY0IDExNC43NSA0NjQgMTI4UzQ3NC43NSAxNTIgNDg4IDE1MlM1MTIgMTQxLjI1IDUxMiAxMjhTNTAxLjI1IDEwNCA0ODggMTA0Wk00ODggMjA4QzQ3NC43NSAyMDggNDY0IDIxOC43NSA0NjQgMjMyUzQ3NC43NSAyNTYgNDg4IDI1NlM1MTIgMjQ1LjI1IDUxMiAyMzJTNTAxLjI1IDIwOCA0ODggMjA4Wk00ODggNDhDNTAxLjI1IDQ4IDUxMiAzNy4yNSA1MTIgMjRTNTAxLjI1IDAgNDg4IDBTNDY0IDEwLjc1IDQ2NCAyNFM0NzQuNzUgNDggNDg4IDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sprinkler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M398.25 256H288V96C288 78.327 273.673 64 256 64H256C238.327 64 224 78.327 224 96V256H113.75C107.125 256 100.875 259.75 97.875 265.875C94.875 271.875 95.5 279 99.625 284.5L167.125 362.625L192 387.5V512H320V387.5L344.875 362.625L412.375 284.5C416.5 279 417.125 271.875 414.125 265.875C411.125 259.75 404.875 256 398.25 256ZM152 152C165.25 152 176 141.25 176 128S165.25 104 152 104S128 114.75 128 128S138.75 152 152 152ZM88 96C101.25 96 112 85.25 112 72S101.25 48 88 48S64 58.75 64 72S74.75 96 88 96ZM112 184C112 170.75 101.25 160 88 160S64 170.75 64 184S74.75 208 88 208S112 197.25 112 184ZM24 104C10.75 104 0 114.75 0 128S10.75 152 24 152S48 141.25 48 128S37.25 104 24 104ZM24 0C10.75 0 0 10.75 0 24S10.75 48 24 48S48 37.25 48 24S37.25 0 24 0ZM24 208C10.75 208 0 218.75 0 232S10.75 256 24 256S48 245.25 48 232S37.25 208 24 208ZM360 152C373.25 152 384 141.25 384 128S373.25 104 360 104S336 114.75 336 128S346.75 152 360 152ZM424 160C410.75 160 400 170.75 400 184S410.75 208 424 208S448 197.25 448 184S437.25 160 424 160ZM424 48C410.75 48 400 58.75 400 72S410.75 96 424 96S448 85.25 448 72S437.25 48 424 48ZM488 104C474.75 104 464 114.75 464 128S474.75 152 488 152S512 141.25 512 128S501.25 104 488 104ZM488 208C474.75 208 464 218.75 464 232S474.75 256 488 256S512 245.25 512 232S501.25 208 488 208ZM488 48C501.25 48 512 37.25 512 24S501.25 0 488 0S464 10.75 464 24S474.75 48 488 48Z" />
    </Icon>
);

export default Sprinkler;