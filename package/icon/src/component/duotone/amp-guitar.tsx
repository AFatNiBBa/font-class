
import { Icon, generic } from "../../index";

/**
 * A component that renders the `amp-guitar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/amp-guitar?s=duotone amp-guitar}
 * @preview ![amp-guitar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NS41ODQgNDhDMjg1Ljk5IDQ4IDMxOS43MjMgNzIuMDI1IDM0NS4yOTMgOTZINDExLjE2OEMzODkuMDYxIDY5LjE1OCAzMjUuMzg3IDAgMjU1LjU4NCAwUzEyMi4xMDcgNjkuMTU4IDEwMCA5NkgxNjUuNzg3QzE5MS4zMTIgNzIuMDI3IDIyNS4wMzkgNDggMjU1LjU4NCA0OFpNMzgzLjU4NCAzODRDMzc0Ljc0OCAzODQgMzY3LjU4NCAzOTEuMTY0IDM2Ny41ODQgNDAwUzM3NC43NDggNDE2IDM4My41ODQgNDE2UzM5OS41ODQgNDA4LjgzNiAzOTkuNTg0IDQwMFMzOTIuNDIgMzg0IDM4My41ODQgMzg0Wk0zMTkuNTg0IDM4NEMzMTAuNzQ4IDM4NCAzMDMuNTg0IDM5MS4xNjQgMzAzLjU4NCA0MDBTMzEwLjc0OCA0MTYgMzE5LjU4NCA0MTZTMzM1LjU4NCA0MDguODM2IDMzNS41ODQgNDAwUzMyOC40MiAzODQgMzE5LjU4NCAzODRaTTM4My41ODQgMjg4QzM3NC43NDggMjg4IDM2Ny41ODQgMjk1LjE2NCAzNjcuNTg0IDMwNFMzNzQuNzQ4IDMyMCAzODMuNTg0IDMyMFMzOTkuNTg0IDMxMi44MzYgMzk5LjU4NCAzMDRTMzkyLjQyIDI4OCAzODMuNTg0IDI4OFpNMjU1LjU4NCAzODRDMjQ2Ljc0OCAzODQgMjM5LjU4NCAzOTEuMTY0IDIzOS41ODQgNDAwUzI0Ni43NDggNDE2IDI1NS41ODQgNDE2UzI3MS41ODQgNDA4LjgzNiAyNzEuNTg0IDQwMFMyNjQuNDIgMzg0IDI1NS41ODQgMzg0Wk0xOTEuNTg0IDM4NEMxODIuNzQ4IDM4NCAxNzUuNTg0IDM5MS4xNjQgMTc1LjU4NCA0MDBTMTgyLjc0OCA0MTYgMTkxLjU4NCA0MTZTMjA3LjU4NCA0MDguODM2IDIwNy41ODQgNDAwUzIwMC40MiAzODQgMTkxLjU4NCAzODRaTTIyMy41ODQgMzM2QzIxNC43NDggMzM2IDIwNy41ODQgMzQzLjE2NCAyMDcuNTg0IDM1MlMyMTQuNzQ4IDM2OCAyMjMuNTg0IDM2OFMyMzkuNTg0IDM2MC44MzYgMjM5LjU4NCAzNTJTMjMyLjQyIDMzNiAyMjMuNTg0IDMzNlpNMTU5LjU4NCAzMzZDMTUwLjc0OCAzMzYgMTQzLjU4NCAzNDMuMTY0IDE0My41ODQgMzUyUzE1MC43NDggMzY4IDE1OS41ODQgMzY4UzE3NS41ODQgMzYwLjgzNiAxNzUuNTg0IDM1MlMxNjguNDIgMzM2IDE1OS41ODQgMzM2Wk0xMjcuNTg0IDM4NEMxMTguNzQ4IDM4NCAxMTEuNTg0IDM5MS4xNjQgMTExLjU4NCA0MDBTMTE4Ljc0OCA0MTYgMTI3LjU4NCA0MTZTMTQzLjU4NCA0MDguODM2IDE0My41ODQgNDAwUzEzNi40MiAzODQgMTI3LjU4NCAzODRaTTExMS41ODQgMzA0QzExMS41ODQgMzEyLjgzNiAxMTguNzQ4IDMyMCAxMjcuNTg0IDMyMFMxNDMuNTg0IDMxMi44MzYgMTQzLjU4NCAzMDRTMTM2LjQyIDI4OCAxMjcuNTg0IDI4OFMxMTEuNTg0IDI5NS4xNjQgMTExLjU4NCAzMDRaTTMwMy41ODQgMzA0QzMwMy41ODQgMzEyLjgzNiAzMTAuNzQ4IDMyMCAzMTkuNTg0IDMyMFMzMzUuNTg0IDMxMi44MzYgMzM1LjU4NCAzMDRTMzI4LjQyIDI4OCAzMTkuNTg0IDI4OFMzMDMuNTg0IDI5NS4xNjQgMzAzLjU4NCAzMDRaTTE3NS41ODQgMzA0QzE3NS41ODQgMzEyLjgzNiAxODIuNzQ4IDMyMCAxOTEuNTg0IDMyMFMyMDcuNTg0IDMxMi44MzYgMjA3LjU4NCAzMDRTMjAwLjQyIDI4OCAxOTEuNTg0IDI4OFMxNzUuNTg0IDI5NS4xNjQgMTc1LjU4NCAzMDRaTTM1MS41ODQgMzM2QzM0Mi43NDggMzM2IDMzNS41ODQgMzQzLjE2NCAzMzUuNTg0IDM1MlMzNDIuNzQ4IDM2OCAzNTEuNTg0IDM2OFMzNjcuNTg0IDM2MC44MzYgMzY3LjU4NCAzNTJTMzYwLjQyIDMzNiAzNTEuNTg0IDMzNlpNMjg3LjU4NCAzMzZDMjc4Ljc0OCAzMzYgMjcxLjU4NCAzNDMuMTY0IDI3MS41ODQgMzUyUzI3OC43NDggMzY4IDI4Ny41ODQgMzY4UzMwMy41ODQgMzYwLjgzNiAzMDMuNTg0IDM1MlMyOTYuNDIgMzM2IDI4Ny41ODQgMzM2Wk0yMzkuNTg0IDMwNEMyMzkuNTg0IDMxMi44MzYgMjQ2Ljc0OCAzMjAgMjU1LjU4NCAzMjBTMjcxLjU4NCAzMTIuODM2IDI3MS41ODQgMzA0UzI2NC40MiAyODggMjU1LjU4NCAyODhTMjM5LjU4NCAyOTUuMTY0IDIzOS41ODQgMzA0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NjQgOTZINDhDMjEuNDkgOTYgMCAxMTcuNDkgMCAxNDRWNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJINDY0QzQ5MC41MSA1MTIgNTEyIDQ5MC41MSA1MTIgNDY0VjE0NEM1MTIgMTE3LjQ5IDQ5MC41MSA5NiA0NjQgOTZaTTQxNiAxNTJDNDI5LjI1NCAxNTIgNDQwIDE2Mi43NDYgNDQwIDE3NlM0MjkuMjU0IDIwMCA0MTYgMjAwUzM5MiAxODkuMjU0IDM5MiAxNzZTNDAyLjc0NiAxNTIgNDE2IDE1MlpNMzIwIDE1MkMzMzMuMjU0IDE1MiAzNDQgMTYyLjc0NiAzNDQgMTc2UzMzMy4yNTQgMjAwIDMyMCAyMDBTMjk2IDE4OS4yNTQgMjk2IDE3NlMzMDYuNzQ2IDE1MiAzMjAgMTUyWk0xOTIgMTUyQzIwNS4yNTQgMTUyIDIxNiAxNjIuNzQ2IDIxNiAxNzZTMjA1LjI1NCAyMDAgMTkyIDIwMFMxNjggMTg5LjI1NCAxNjggMTc2UzE3OC43NDYgMTUyIDE5MiAxNTJaTTk2IDE1MkMxMDkuMjU0IDE1MiAxMjAgMTYyLjc0NiAxMjAgMTc2UzEwOS4yNTQgMjAwIDk2IDIwMFM3MiAxODkuMjU0IDcyIDE3NlM4Mi43NDYgMTUyIDk2IDE1MlpNNDQ4IDQ0OEg2NFYyNTZINDQ4VjQ0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const AmpGuitar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M255.584 48C285.99 48 319.723 72.025 345.293 96H411.168C389.061 69.158 325.387 0 255.584 0S122.107 69.158 100 96H165.787C191.312 72.027 225.039 48 255.584 48ZM383.584 384C374.748 384 367.584 391.164 367.584 400S374.748 416 383.584 416S399.584 408.836 399.584 400S392.42 384 383.584 384ZM319.584 384C310.748 384 303.584 391.164 303.584 400S310.748 416 319.584 416S335.584 408.836 335.584 400S328.42 384 319.584 384ZM383.584 288C374.748 288 367.584 295.164 367.584 304S374.748 320 383.584 320S399.584 312.836 399.584 304S392.42 288 383.584 288ZM255.584 384C246.748 384 239.584 391.164 239.584 400S246.748 416 255.584 416S271.584 408.836 271.584 400S264.42 384 255.584 384ZM191.584 384C182.748 384 175.584 391.164 175.584 400S182.748 416 191.584 416S207.584 408.836 207.584 400S200.42 384 191.584 384ZM223.584 336C214.748 336 207.584 343.164 207.584 352S214.748 368 223.584 368S239.584 360.836 239.584 352S232.42 336 223.584 336ZM159.584 336C150.748 336 143.584 343.164 143.584 352S150.748 368 159.584 368S175.584 360.836 175.584 352S168.42 336 159.584 336ZM127.584 384C118.748 384 111.584 391.164 111.584 400S118.748 416 127.584 416S143.584 408.836 143.584 400S136.42 384 127.584 384ZM111.584 304C111.584 312.836 118.748 320 127.584 320S143.584 312.836 143.584 304S136.42 288 127.584 288S111.584 295.164 111.584 304ZM303.584 304C303.584 312.836 310.748 320 319.584 320S335.584 312.836 335.584 304S328.42 288 319.584 288S303.584 295.164 303.584 304ZM175.584 304C175.584 312.836 182.748 320 191.584 320S207.584 312.836 207.584 304S200.42 288 191.584 288S175.584 295.164 175.584 304ZM351.584 336C342.748 336 335.584 343.164 335.584 352S342.748 368 351.584 368S367.584 360.836 367.584 352S360.42 336 351.584 336ZM287.584 336C278.748 336 271.584 343.164 271.584 352S278.748 368 287.584 368S303.584 360.836 303.584 352S296.42 336 287.584 336ZM239.584 304C239.584 312.836 246.748 320 255.584 320S271.584 312.836 271.584 304S264.42 288 255.584 288S239.584 295.164 239.584 304Z" />
            <path d="M464 96H48C21.49 96 0 117.49 0 144V464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464V144C512 117.49 490.51 96 464 96ZM416 152C429.254 152 440 162.746 440 176S429.254 200 416 200S392 189.254 392 176S402.746 152 416 152ZM320 152C333.254 152 344 162.746 344 176S333.254 200 320 200S296 189.254 296 176S306.746 152 320 152ZM192 152C205.254 152 216 162.746 216 176S205.254 200 192 200S168 189.254 168 176S178.746 152 192 152ZM96 152C109.254 152 120 162.746 120 176S109.254 200 96 200S72 189.254 72 176S82.746 152 96 152ZM448 448H64V256H448V448Z" />
    </Icon>
);

export default AmpGuitar;