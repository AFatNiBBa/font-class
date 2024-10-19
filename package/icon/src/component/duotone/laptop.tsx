
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=duotone laptop}
 * @preview ![laptop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYyNCAzODRIMTZDNy4yNSAzODQgMCAzOTEuMjUgMCA0MDBWNDE2QzAgNDUxLjI1IDI4Ljc1IDQ4MCA2NCA0ODBINTc2QzYxMS4yNSA0ODAgNjQwIDQ1MS4yNSA2NDAgNDE2VjQwMEM2NDAgMzkxLjI1IDYzMi43NSAzODQgNjI0IDM4NFpNMTI4IDk2SDUxMlYzNTJINTc2VjgwQzU3NiA1My42MjUgNTU0LjM3NSAzMiA1MjggMzJIMTEyQzg1LjYyNSAzMiA2NCA1My42MjUgNjQgODBWMzUySDEyOFY5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTEyIDM1MkgxMjhWOTZINTEyVjM1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM128 96H512V352H576V80C576 53.625 554.375 32 528 32H112C85.625 32 64 53.625 64 80V352H128V96Z" />
            <path d="M512 352H128V96H512V352Z" />
    </Icon>
);

export default Laptop;