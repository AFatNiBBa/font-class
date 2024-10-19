
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=duotone arrow-turn-left}
 * @preview ![arrow-turn-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03Ny4zIDIyNGwzMi0zMkw0MTYgMTkyYzUzIDAgOTYgNDMgOTYgOTZsMCAxNjBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xNjBjMC0xNy43LTE0LjMtMzItMzItMzJsLTMwNi43IDAtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xODIuNiAzNzQuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBsLTEyOC0xMjhjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zbDEyOC0xMjhjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBzMTIuNSAzMi44IDAgNDUuM0w3Ny4zIDIyNCAxODIuNiAzMjkuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M77.3 224l32-32L416 192c53 0 96 43 96 96l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7-14.3-32-32-32l-306.7 0-32-32z" />
            <path d="M182.6 374.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 224 182.6 329.4c12.5 12.5 12.5 32.8 0 45.3z" />
    </Icon>
);

export default ArrowTurnLeft;