
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quote-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=sharp-duotone-solid quote-right}
 * @preview ![quote-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgMjg4bDEyOCAwIDAgOGMwIDMwLjktMjUuMSA1Ni01NiA1NmwtOCAwLTMyIDAgMCA2NCAzMiAwIDggMGM2Ni4zIDAgMTIwLTUzLjcgMTIwLTEyMGwwLTggMC05NiAwLTk2TDAgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjggNDE2YzY2LjMgMCAxMjAtNTMuNyAxMjAtMTIwbDAtOCAwLTk2IDAtOTZMMjU2IDk2bDAgMTkyIDEyOCAwIDAgOGMwIDMwLjktMjUuMSA1Ni01NiA1NmwtOCAwLTMyIDAgMCA2NCAzMiAwIDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const QuoteRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 288l128 0 0 8c0 30.9-25.1 56-56 56l-8 0-32 0 0 64 32 0 8 0c66.3 0 120-53.7 120-120l0-8 0-96 0-96L0 96z" />
            <path d="M328 416c66.3 0 120-53.7 120-120l0-8 0-96 0-96L256 96l0 192 128 0 0 8c0 30.9-25.1 56-56 56l-8 0-32 0 0 64 32 0 8 0z" />
    </Icon>
);

export default QuoteRight;