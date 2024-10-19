
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cross` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=duotone cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAxNjBWMjI0QzM4NCAyNDEuNjI1IDM2OS42MjUgMjU2IDM1MiAyNTZIMjU2VjQ4MEMyNTYgNDk3LjYyNSAyNDEuNjI1IDUxMiAyMjQgNTEySDE2MEMxNDIuMzc1IDUxMiAxMjggNDk3LjYyNSAxMjggNDgwVjI1NkgzMkMxNC4zNzUgMjU2IDAgMjQxLjYyNSAwIDIyNFYxNjBDMCAxNDIuMzc1IDE0LjM3NSAxMjggMzIgMTI4SDEyOFYzMkMxMjggMTQuMzc1IDE0Mi4zNzUgMCAxNjAgMEgyMjRDMjQxLjYyNSAwIDI1NiAxNC4zNzUgMjU2IDMyVjEyOEgzNTJDMzY5LjYyNSAxMjggMzg0IDE0Mi4zNzUgMzg0IDE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 160V224C384 241.625 369.625 256 352 256H256V480C256 497.625 241.625 512 224 512H160C142.375 512 128 497.625 128 480V256H32C14.375 256 0 241.625 0 224V160C0 142.375 14.375 128 32 128H128V32C128 14.375 142.375 0 160 0H224C241.625 0 256 14.375 256 32V128H352C369.625 128 384 142.375 384 160Z" />
    </Icon>
);

export default Cross;