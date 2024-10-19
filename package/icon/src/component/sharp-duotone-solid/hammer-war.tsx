
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer-war` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=sharp-duotone-solid hammer-war}
 * @preview ![hammer-war](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMGwwIDMyIDAgMjQuOWMxMC43IDIuNCAyMS4zIDQuNyAzMiA3LjFsMzItNy4xTDIyNCAzMmwwLTMyTDE2MCAwem0wIDI2My4xTDE2MCA0ODBsMCAzMiA2NCAwIDAtMzIgMC0yMTYuOUwxOTIgMjU2bC0zMiA3LjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI4OFYzMkg0OEwxOTIgNjQgMzM2IDMyaDQ4VjI4OEgzMzZMMTkyIDI1NiA0OCAyODhIMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HammerWar: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 0l0 32 0 24.9c10.7 2.4 21.3 4.7 32 7.1l32-7.1L224 32l0-32L160 0zm0 263.1L160 480l0 32 64 0 0-32 0-216.9L192 256l-32 7.1z" />
            <path d="M0 288V32H48L192 64 336 32h48V288H336L192 256 48 288H0z" />
    </Icon>
);

export default HammerWar;