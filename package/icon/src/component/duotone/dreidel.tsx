
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=duotone dreidel}
 * @preview ![dreidel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0My42NjQgODEuOTQzTDMzNC42NzIgMTkwLjk1OUw0MDYuNjY2IDI2Mi44NDRDNDE5Ljc5MSAyNzUuOTcxIDQxOS43OTEgMjk3LjEgNDA2LjY2NiAzMTAuMjI3TDMxNS4zNTkgNDAxLjU0OUw3OSAxNjUuMTQxTDE3MC4zMDkgNzMuNjkzQzE4My40MzIgNjAuNjkxIDIwNC41NTcgNjAuNjkxIDIxNy42OCA3My42OTNMMjg5LjU1MSAxNDUuNzAzTDM5OC41NDMgMzYuNjg3QzQwNC42NjggMzAuNDM3IDQxNC45MTYgMzAuNDM3IDQyMS4xNjYgMzYuNjg3TDQ0My42NjQgNTkuMTkxQzQ1MC4wMzkgNjUuNTY2IDQ1MC4wMzkgNzUuNjkzIDQ0My42NjQgODEuOTQzWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTQuODU0IDQwMS40ODhMMjU1Ljk4MiA0NjAuMzcxQzI0My4zNTcgNDcyLjk5OCAyMjYuMzU5IDQ4MCAyMDguNzM2IDQ4MEg2Ni44NzFDMjkuODczIDQ4MCAwIDQ1MC4xMjEgMCA0MTMuMTE1VjI3MS4yMjFDMCAyNTMuNDY5IDcgMjM2LjQ2NSAxOS42MjMgMjIzLjk2M0w3OC40OTQgMTY1LjA4TDMxNC44NTQgNDAxLjQ4OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M443.664 81.943L334.672 190.959L406.666 262.844C419.791 275.971 419.791 297.1 406.666 310.227L315.359 401.549L79 165.141L170.309 73.693C183.432 60.691 204.557 60.691 217.68 73.693L289.551 145.703L398.543 36.687C404.668 30.437 414.916 30.437 421.166 36.687L443.664 59.191C450.039 65.566 450.039 75.693 443.664 81.943Z" />
            <path d="M314.854 401.488L255.982 460.371C243.357 472.998 226.359 480 208.736 480H66.871C29.873 480 0 450.121 0 413.115V271.221C0 253.469 7 236.465 19.623 223.963L78.494 165.08L314.854 401.488Z" />
    </Icon>
);

export default Dreidel;