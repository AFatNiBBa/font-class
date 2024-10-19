
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `palette-boxes` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/palette-boxes?s=thin palette-boxes}
 * @preview ![palette-boxes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgNDk2SDU1MlYzNjhINjMyQzYzNi40MDYgMzY4IDY0MCAzNjQuNDIyIDY0MCAzNjBTNjM2LjQwNiAzNTIgNjMyIDM1Mkg4QzMuNTk0IDM1MiAwIDM1NS41NzggMCAzNjBTMy41OTQgMzY4IDggMzY4SDg4VjQ5Nkg4QzMuNTk0IDQ5NiAwIDQ5OS41NzggMCA1MDRTMy41OTQgNTEyIDggNTEySDYzMkM2MzYuNDA2IDUxMiA2NDAgNTA4LjQyMiA2NDAgNTA0UzYzNi40MDYgNDk2IDYzMiA0OTZaTTMxMiA0OTZIMTA0VjM2OEgzMTJWNDk2Wk01MzYgNDk2SDMyOFYzNjhINTM2VjQ5NlpNMTEyIDI4OEgyNzJDMjk4LjUxIDI4OCAzMjAgMjY2LjUxIDMyMCAyNDBWNDhDMzIwIDIxLjQ5IDI5OC41MSAwIDI3MiAwSDExMkM4NS40OSAwIDY0IDIxLjQ5IDY0IDQ4VjI0MEM2NCAyNjYuNTEgODUuNDkgMjg4IDExMiAyODhaTTgwIDQ4QzgwIDMwLjM1NSA5NC4zNTUgMTYgMTEyIDE2SDI3MkMyODkuNjQ1IDE2IDMwNCAzMC4zNTUgMzA0IDQ4VjI0MEMzMDQgMjU3LjY0NSAyODkuNjQ1IDI3MiAyNzIgMjcySDExMkM5NC4zNTUgMjcyIDgwIDI1Ny42NDUgODAgMjQwVjQ4Wk00MzIgMjg4SDUyOEM1NTQuNTEgMjg4IDU3NiAyNjYuNTEgNTc2IDI0MFYxMTJDNTc2IDg1LjQ5IDU1NC41MSA2NCA1MjggNjRINDMyQzQwNS40OSA2NCAzODQgODUuNDkgMzg0IDExMlYyNDBDMzg0IDI2Ni41MSA0MDUuNDkgMjg4IDQzMiAyODhaTTQwMCAxMTJDNDAwIDk0LjM1NSA0MTQuMzU1IDgwIDQzMiA4MEg1MjhDNTQ1LjY0NSA4MCA1NjAgOTQuMzU1IDU2MCAxMTJWMjQwQzU2MCAyNTcuNjQ1IDU0NS42NDUgMjcyIDUyOCAyNzJINDMyQzQxNC4zNTUgMjcyIDQwMCAyNTcuNjQ1IDQwMCAyNDBWMTEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PaletteBoxes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 496H552V368H632C636.406 368 640 364.422 640 360S636.406 352 632 352H8C3.594 352 0 355.578 0 360S3.594 368 8 368H88V496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H632C636.406 512 640 508.422 640 504S636.406 496 632 496ZM312 496H104V368H312V496ZM536 496H328V368H536V496ZM112 288H272C298.51 288 320 266.51 320 240V48C320 21.49 298.51 0 272 0H112C85.49 0 64 21.49 64 48V240C64 266.51 85.49 288 112 288ZM80 48C80 30.355 94.355 16 112 16H272C289.645 16 304 30.355 304 48V240C304 257.645 289.645 272 272 272H112C94.355 272 80 257.645 80 240V48ZM432 288H528C554.51 288 576 266.51 576 240V112C576 85.49 554.51 64 528 64H432C405.49 64 384 85.49 384 112V240C384 266.51 405.49 288 432 288ZM400 112C400 94.355 414.355 80 432 80H528C545.645 80 560 94.355 560 112V240C560 257.645 545.645 272 528 272H432C414.355 272 400 257.645 400 240V112Z" />
        </Icon>
    </>
}