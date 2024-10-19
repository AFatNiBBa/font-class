
import { Icon } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=thin gift-card}
 * @preview ![gift-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTI4SDQ1NC44MjhDNDcwLjA0NyAxMTQuNzk3IDQ4MCA5NC43MzQgNDgwIDcyQzQ4MCAzMi4yOTcgNDUwLjIxOSAwIDQxMy42MjUgMEMzODIuNjIzIDAgMzU5LjM5NiA2LjM0NCAyODguNDQ1IDEyMC4xODRDMjg4LjEyMyAxMjAuMTY0IDI4Ny44NzcgMTIwLjE2NCAyODcuNTU1IDEyMC4xODRDMjE2LjYwNCA2LjM0NCAxOTMuMzc3IDAgMTYyLjM3NSAwQzEyNS43ODEgMCA5NiAzMi4yOTcgOTYgNzJDOTYgOTQuNzM0IDEwNS45NTMgMTE0Ljc5NyAxMjEuMTcyIDEyOEg2NEMyOC42NTQgMTI4IDAgMTU2LjY1MiAwIDE5MlY0NDhDMCA0ODMuMzQ4IDI4LjY1NCA1MTIgNjQgNTEySDUxMkM1NDcuMzQ2IDUxMiA1NzYgNDgzLjM0OCA1NzYgNDQ4VjE5MkM1NzYgMTU2LjY1MiA1NDcuMzQ2IDEyOCA1MTIgMTI4Wk00MTMuNjI1IDE2QzQ0MS40MDYgMTYgNDY0IDQxLjEyNSA0NjQgNzJTNDQxLjQwNiAxMjggNDEzLjYyNSAxMjhIMzAyLjM0NEMzNzIuMTU2IDE2IDM5MC41MzEgMTYgNDEzLjYyNSAxNlpNMTEyIDcyQzExMiA0MS4xMjUgMTM0LjU5NCAxNiAxNjIuMzc1IDE2QzE4NS40NjkgMTYgMjAzLjg0NCAxNiAyNzMuNjU2IDEyOEgxNjIuMzc1QzEzNC41OTQgMTI4IDExMiAxMDIuODc1IDExMiA3MlpNNTYwIDQ0OEM1NjAgNDc0LjQ2OSA1MzguNDY3IDQ5NiA1MTIgNDk2SDY0QzM3LjUzMyA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNDE2SDU2MFY0NDhaTTU2MCA0MDBIMTZWMzIwSDU2MFY0MDBaTTE2IDMwNFYxOTJDMTYgMTY1LjUzMSAzNy41MzMgMTQ0IDY0IDE0NEgyNjAuNjg4TDE4Ni4zNDQgMjE4LjM0NEMxODMuMjE5IDIyMS40NjkgMTgzLjIxOSAyMjYuNTMxIDE4Ni4zNDQgMjI5LjY1NkMxODcuOTA2IDIzMS4yMTkgMTg5Ljk1MyAyMzIgMTkyIDIzMlMxOTYuMDk0IDIzMS4yMTkgMTk3LjY1NiAyMjkuNjU2TDI4My4zMTMgMTQ0SDI5Mi42ODhMMzc4LjM0NCAyMjkuNjU2QzM3OS45MDYgMjMxLjIxOSAzODEuOTUzIDIzMiAzODQgMjMyUzM4OC4wOTQgMjMxLjIxOSAzODkuNjU2IDIyOS42NTZDMzkyLjc4MSAyMjYuNTMxIDM5Mi43ODEgMjIxLjQ2OSAzODkuNjU2IDIxOC4zNDRMMzE1LjMxMyAxNDRINTEyQzUzOC40NjcgMTQ0IDU2MCAxNjUuNTMxIDU2MCAxOTJWMzA0SDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 128H454.828C470.047 114.797 480 94.734 480 72C480 32.297 450.219 0 413.625 0C382.623 0 359.396 6.344 288.445 120.184C288.123 120.164 287.877 120.164 287.555 120.184C216.604 6.344 193.377 0 162.375 0C125.781 0 96 32.297 96 72C96 94.734 105.953 114.797 121.172 128H64C28.654 128 0 156.652 0 192V448C0 483.348 28.654 512 64 512H512C547.346 512 576 483.348 576 448V192C576 156.652 547.346 128 512 128ZM413.625 16C441.406 16 464 41.125 464 72S441.406 128 413.625 128H302.344C372.156 16 390.531 16 413.625 16ZM112 72C112 41.125 134.594 16 162.375 16C185.469 16 203.844 16 273.656 128H162.375C134.594 128 112 102.875 112 72ZM560 448C560 474.469 538.467 496 512 496H64C37.533 496 16 474.469 16 448V416H560V448ZM560 400H16V320H560V400ZM16 304V192C16 165.531 37.533 144 64 144H260.688L186.344 218.344C183.219 221.469 183.219 226.531 186.344 229.656C187.906 231.219 189.953 232 192 232S196.094 231.219 197.656 229.656L283.313 144H292.688L378.344 229.656C379.906 231.219 381.953 232 384 232S388.094 231.219 389.656 229.656C392.781 226.531 392.781 221.469 389.656 218.344L315.313 144H512C538.467 144 560 165.531 560 192V304H16Z" />
    </Icon>
);

export default GiftCard;