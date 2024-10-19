
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `palette-boxes` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/palette-boxes?s=solid palette-boxes}
 * @preview ![palette-boxes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAyNTZIMjg4QzMwNS42IDI1NiAzMjAgMjQxLjYgMzIwIDIyNFYzMkMzMjAgMTQuNCAzMDUuNiAwIDI4OCAwSDk2Qzc4LjQgMCA2NCAxNC40IDY0IDMyVjIyNEM2NCAyNDEuNiA3OC40IDI1NiA5NiAyNTZaTTQxNiAyNTZINTQ0QzU2MS42IDI1NiA1NzYgMjQxLjYgNTc2IDIyNFY5NkM1NzYgNzguNCA1NjEuNiA2NCA1NDQgNjRINDE2QzM5OC40IDY0IDM4NCA3OC40IDM4NCA5NlYyMjRDMzg0IDI0MS42IDM5OC40IDI1NiA0MTYgMjU2Wk02MjQgMzg0QzYzMi43NSAzODQgNjQwIDM3Ni43NSA2NDAgMzY4VjMzNkM2NDAgMzI3LjI1IDYzMi43NSAzMjAgNjI0IDMyMEgxNkM3LjI1IDMyMCAwIDMyNy4yNSAwIDMzNlYzNjhDMCAzNzYuNzUgNy4yNSAzODQgMTYgMzg0SDY0VjQ0OEgxNkM3LjI1IDQ0OCAwIDQ1NS4yNSAwIDQ2NFY0OTZDMCA1MDQuNzUgNy4yNSA1MTIgMTYgNTEySDYyNEM2MzIuNzUgNTEyIDY0MCA1MDQuNzUgNjQwIDQ5NlY0NjRDNjQwIDQ1NS4yNSA2MzIuNzUgNDQ4IDYyNCA0NDhINTc2VjM4NEg2MjRaTTI4OCA0NDhIMTI4VjM4NEgyODhWNDQ4Wk01MTIgNDQ4SDM1MlYzODRINTEyVjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PaletteBoxes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M96 256H288C305.6 256 320 241.6 320 224V32C320 14.4 305.6 0 288 0H96C78.4 0 64 14.4 64 32V224C64 241.6 78.4 256 96 256ZM416 256H544C561.6 256 576 241.6 576 224V96C576 78.4 561.6 64 544 64H416C398.4 64 384 78.4 384 96V224C384 241.6 398.4 256 416 256ZM624 384C632.75 384 640 376.75 640 368V336C640 327.25 632.75 320 624 320H16C7.25 320 0 327.25 0 336V368C0 376.75 7.25 384 16 384H64V448H16C7.25 448 0 455.25 0 464V496C0 504.75 7.25 512 16 512H624C632.75 512 640 504.75 640 496V464C640 455.25 632.75 448 624 448H576V384H624ZM288 448H128V384H288V448ZM512 448H352V384H512V448Z" />
        </Icon>
    </>
}