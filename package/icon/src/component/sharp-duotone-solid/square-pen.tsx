
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=sharp-duotone-solid square-pen}
 * @preview ![square-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDM4NGwxNi05NkwyMjAuNyAxNzkuM2w4MCA4MEwxOTIgMzY4IDk2IDM4NHpNMjQzLjMgMTU2LjdMMjg4IDExMmw4MCA4MC00NC43IDQ0LjctODAtODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzODRsMTYtOTZMMjIwLjcgMTc5LjNsODAgODBMMTkyIDM2OCA5NiAzODR6TTMyMy4zIDIzNi43bC04MC04MEwyODggMTEybDgwIDgwLTQ0LjcgNDQuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 384l16-96L220.7 179.3l80 80L192 368 96 384zM243.3 156.7L288 112l80 80-44.7 44.7-80-80z" />
            <path d="M96 384l16-96L220.7 179.3l80 80L192 368 96 384zM323.3 236.7l-80-80L288 112l80 80-44.7 44.7z" />
    </Icon>
);

export default SquarePen;