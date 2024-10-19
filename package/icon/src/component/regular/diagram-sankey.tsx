
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-sankey` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=regular diagram-sankey}
 * @preview ![diagram-sankey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMjk2QzYwOCAyODMgNTk3IDI3MiA1ODQgMjcySDU2QzQzIDI3MiAzMiAyODMgMzIgMjk2UzQzIDMyMCA1NiAzMjBIMTc4TDI2NyA0NjhDMjcyIDQ3NiAyODAgNDgwIDI4OCA0ODBINTg0QzU5NyA0ODAgNjA4IDQ2OSA2MDggNDU2UzU5NyA0MzIgNTg0IDQzMkgzMDJMMjM0IDMyMEg1ODRDNTk3IDMyMCA2MDggMzA5IDYwOCAyOTZaTTU2IDI0MEgyNDhDMjU2IDI0MCAyNjQgMjM2IDI2OSAyMjhMMzU4IDgwSDU4NEM1OTcgODAgNjA4IDY5IDYwOCA1NlM1OTcgMzIgNTg0IDMySDM0NEMzMzYgMzIgMzI4IDM2IDMyMyA0NEwyMzQgMTkySDU2QzQzIDE5MiAzMiAyMDMgMzIgMjE2UzQzIDI0MCA1NiAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramSankey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 296C608 283 597 272 584 272H56C43 272 32 283 32 296S43 320 56 320H178L267 468C272 476 280 480 288 480H584C597 480 608 469 608 456S597 432 584 432H302L234 320H584C597 320 608 309 608 296ZM56 240H248C256 240 264 236 269 228L358 80H584C597 80 608 69 608 56S597 32 584 32H344C336 32 328 36 323 44L234 192H56C43 192 32 203 32 216S43 240 56 240Z" />
        </Icon>
    </>
}