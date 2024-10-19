
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=sharp-duotone-solid circle-m}
 * @preview ![circle-m](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOCAxMjhsMzYuMyAwIDcuMiA5LjlMMjU2IDI1NWw4NC41LTExNy4xIDcuMi05LjkgMzYuMyAwIDAgMjQgMCAyMDggMCAyNC00OCAwIDAtMjQgMC0xMzMuOC02MC41IDgzLjhMMjU2IDMzN2wtMTkuNS0yNi45TDE3NiAyMjYuMiAxNzYgMzYwbDAgMjQtNDggMCAwLTI0IDAtMjA4IDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMTI4bDAgMjQgMCAyMDggMCAyNCA0OCAwIDAtMjQgMC0xMzMuOCA2MC41IDgzLjhMMjU2IDMzN2wxOS41LTI2LjlMMzM2IDIyNi4yIDMzNiAzNjBsMCAyNCA0OCAwIDAtMjQgMC0yMDggMC0yNC0zNi4zIDAtNy4yIDkuOUwyNTYgMjU1IDE3MS41IDEzNy45bC03LjItOS45TDEyOCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 128l36.3 0 7.2 9.9L256 255l84.5-117.1 7.2-9.9 36.3 0 0 24 0 208 0 24-48 0 0-24 0-133.8-60.5 83.8L256 337l-19.5-26.9L176 226.2 176 360l0 24-48 0 0-24 0-208 0-24z" />
            <path d="M128 128l0 24 0 208 0 24 48 0 0-24 0-133.8 60.5 83.8L256 337l19.5-26.9L336 226.2 336 360l0 24 48 0 0-24 0-208 0-24-36.3 0-7.2 9.9L256 255 171.5 137.9l-7.2-9.9L128 128z" />
    </Icon>
);

export default CircleM;