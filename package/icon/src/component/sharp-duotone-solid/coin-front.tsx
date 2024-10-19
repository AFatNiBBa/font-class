
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=sharp-duotone-solid coin-front}
 * @preview ![coin-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTQ0OCAwQTE5MiAxOTIgMCAxIDEgNjQgMjU2YTE5MiAxOTIgMCAxIDEgMzg0IDB6TTk2IDI1NmExNjAgMTYwIDAgMSAwIDMyMCAwQTE2MCAxNjAgMCAxIDAgOTYgMjU2em0xMzYtOTZsNDggMCAwIDI0IDAgMTQ0IDAgMjQtNDggMCAwLTI0IDAtMTQ0IDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgOTZhMTYwIDE2MCAwIDEgMSAwIDMyMCAxNjAgMTYwIDAgMSAxIDAtMzIwem0wIDM1MmExOTIgMTkyIDAgMSAwIDAtMzg0IDE5MiAxOTIgMCAxIDAgMCAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm136-96l48 0 0 24 0 144 0 24-48 0 0-24 0-144 0-24z" />
            <path d="M256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384z" />
    </Icon>
);

export default CoinFront;