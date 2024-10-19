
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `puzzle-piece-simple` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece-simple?s=thin puzzle-piece-simple}
 * @preview ![puzzle-piece-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01ODQgMTg0QzU2OC4xMjUgMTg0IDU1Mi45NjkgMTkyLjczNCA1NDIuNDIyIDIwNy45ODRDNTM4Ljg5MSAyMTMuMDc4IDUzMy43NjYgMjE2IDUyOC4zNTkgMjE2QzUxOS4zNDQgMjE2IDUxMiAyMDguNjU2IDUxMiAxOTkuNjQxVjEwNEM1MTIgODEuOTM4IDQ5NC4wNjIgNjQgNDcyIDY0SDM3Ni4zNTlDMzU4LjUxNiA2NCAzNDQgNzguNTE2IDM0NCA5Ni4zNTlDMzQ0IDEwNi45MjIgMzQ5LjU2MiAxMTcuMTA5IDM1OC45MDYgMTIzLjU3OEMzNjkuOTIyIDEzMS4yMDMgMzc2IDE0MS4yOTcgMzc2IDE1MkMzNzYgMTc0LjA2MiAzNTAuODc1IDE5MiAzMjAgMTkyUzI2NCAxNzQuMDYyIDI2NCAxNTJDMjY0IDE0MS4yOTcgMjcwLjA3OCAxMzEuMjAzIDI4MS4wOTQgMTIzLjU3OEMyOTAuNDM4IDExNy4xMjUgMjk2IDEwNi45MzggMjk2IDk2LjM1OUMyOTYgNzguNTE2IDI4MS40ODQgNjQgMjYzLjY0MSA2NEgxNjhDMTQ1LjkzOCA2NCAxMjggODEuOTM4IDEyOCAxMDRWMTk5LjY0MUMxMjggMjA4LjY1NiAxMjAuNjU2IDIxNiAxMTEuNjQxIDIxNkMxMDYuMjM0IDIxNiAxMDEuMTA5IDIxMy4wNzggOTcuNTc4IDIwNy45ODRDODcuMDMxIDE5Mi43MzQgNzEuODc1IDE4NCA1NiAxODRDMjUuMTI1IDE4NCAwIDIxNi4yOTcgMCAyNTZTMjUuMTI1IDMyOCA1NiAzMjhDNzEuODc1IDMyOCA4Ny4wMzEgMzE5LjI1IDk3LjU3OCAzMDQuMDE2QzEwMS4xMDkgMjk4LjkyMiAxMDYuMjM0IDI5NiAxMTEuNjQxIDI5NkMxMjAuNjU2IDI5NiAxMjggMzAzLjM0NCAxMjggMzEyLjM1OVY0MDhDMTI4IDQzMC4wNjIgMTQ1LjkzOCA0NDggMTY4IDQ0OEgyNjMuNjQxQzI4MS40ODQgNDQ4IDI5NiA0MzMuNDg0IDI5NiA0MTUuNjQxQzI5NiA0MDUuMDYyIDI5MC40MzggMzk0Ljg3NSAyODEuMDk0IDM4OC40MjJDMjcwLjA3OCAzODAuNzk3IDI2NCAzNzAuNzAzIDI2NCAzNjBDMjY0IDMzNy45MzggMjg5LjEyNSAzMjAgMzIwIDMyMFMzNzYgMzM3LjkzOCAzNzYgMzYwQzM3NiAzNzAuNzAzIDM2OS45MjIgMzgwLjc5NyAzNTguODkxIDM4OC40MjJDMzQ5LjU2MiAzOTQuODkxIDM0NCA0MDUuMDc4IDM0NCA0MTUuNjQxQzM0NCA0MzMuNDg0IDM1OC41MTYgNDQ4IDM3Ni4zNTkgNDQ4SDQ3MkM0OTQuMDYyIDQ0OCA1MTIgNDMwLjA2MiA1MTIgNDA4VjMxMi4zNTlDNTEyIDMwMy4zNDQgNTE5LjM0NCAyOTYgNTI4LjM1OSAyOTZDNTMzLjc2NiAyOTYgNTM4Ljg5MSAyOTguOTIyIDU0Mi40MjIgMzA0QzU1Mi45NjkgMzE5LjI1IDU2OC4xMjUgMzI4IDU4NCAzMjhDNjE0Ljg3NSAzMjggNjQwIDI5NS43MDMgNjQwIDI1NlM2MTQuODc1IDE4NCA1ODQgMTg0Wk01ODQgMzEyQzU3My4yOTcgMzEyIDU2My4yMDMgMzA1LjkyMiA1NTUuNTc4IDI5NC44OTFDNTQ5LjEwOSAyODUuNTYyIDUzOC45MjIgMjgwIDUyOC4zNTkgMjgwQzUxMC41MTYgMjgwIDQ5NiAyOTQuNTE2IDQ5NiAzMTIuMzU5VjQwOEM0OTYgNDIxLjIzNCA0ODUuMjM0IDQzMiA0NzIgNDMySDM3Ni4zNTlDMzY3LjM0NCA0MzIgMzYwIDQyNC42NTYgMzYwIDQxNS42NDFDMzYwIDQxMC4yMzQgMzYyLjkyMiA0MDUuMTA5IDM2OCA0MDEuNTc4QzM4My4yNSAzOTEuMDMxIDM5MiAzNzUuODc1IDM5MiAzNjBDMzkyIDMyOS4xMjUgMzU5LjcwMyAzMDQgMzIwIDMwNFMyNDggMzI5LjEyNSAyNDggMzYwQzI0OCAzNzUuODc1IDI1Ni43NSAzOTEuMDMxIDI3MiA0MDEuNTc4QzI3Ny4wNzggNDA1LjA5NCAyODAgNDEwLjIxOSAyODAgNDE1LjY0MUMyODAgNDI0LjY1NiAyNzIuNjU2IDQzMiAyNjMuNjQxIDQzMkgxNjhDMTU0Ljc2NiA0MzIgMTQ0IDQyMS4yMzQgMTQ0IDQwOFYzMTIuMzU5QzE0NCAyOTQuNTE2IDEyOS40ODQgMjgwIDExMS42NDEgMjgwQzEwMS4wNzggMjgwIDkwLjg5MSAyODUuNTYyIDg0LjQyMiAyOTQuOTA2Qzc2Ljc5NyAzMDUuOTIyIDY2LjcwMyAzMTIgNTYgMzEyQzMzLjkzOCAzMTIgMTYgMjg2Ljg3NSAxNiAyNTZTMzMuOTM4IDIwMCA1NiAyMDBDNjYuNzAzIDIwMCA3Ni43OTcgMjA2LjA2MiA4NC40MjIgMjE3LjA3OEM5MC44OTEgMjI2LjQyMiAxMDEuMDYyIDIzMiAxMTEuNjQxIDIzMkMxMjkuNDg0IDIzMiAxNDQgMjE3LjQ4NCAxNDQgMTk5LjY0MVYxMDRDMTQ0IDkwLjc2NiAxNTQuNzY2IDgwIDE2OCA4MEgyNjMuNjQxQzI3Mi42NTYgODAgMjgwIDg3LjM0NCAyODAgOTYuMzU5QzI4MCAxMDEuNzgxIDI3Ny4wNzggMTA2LjkwNiAyNzIgMTEwLjQyMkMyNTYuNzUgMTIwLjk2OSAyNDggMTM2LjEyNSAyNDggMTUyQzI0OCAxODIuODc1IDI4MC4yOTcgMjA4IDMyMCAyMDhTMzkyIDE4Mi44NzUgMzkyIDE1MkMzOTIgMTM2LjEyNSAzODMuMjUgMTIwLjk2OSAzNjguMDE2IDExMC40MjJDMzYyLjkyMiAxMDYuODkxIDM2MCAxMDEuNzY2IDM2MCA5Ni4zNTlDMzYwIDg3LjM0NCAzNjcuMzQ0IDgwIDM3Ni4zNTkgODBINDcyQzQ4NS4yMzQgODAgNDk2IDkwLjc2NiA0OTYgMTA0VjE5OS42NDFDNDk2IDIxNy40ODQgNTEwLjUxNiAyMzIgNTI4LjM1OSAyMzJDNTM4LjkzOCAyMzIgNTQ5LjEwOSAyMjYuNDIyIDU1NS41NzggMjE3LjA3OEM1NjMuMjAzIDIwNi4wNjIgNTczLjI5NyAyMDAgNTg0IDIwMEM2MDYuMDYyIDIwMCA2MjQgMjI1LjEyNSA2MjQgMjU2UzYwNi4wNjIgMzEyIDU4NCAzMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PuzzlePieceSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M584 184C568.125 184 552.969 192.734 542.422 207.984C538.891 213.078 533.766 216 528.359 216C519.344 216 512 208.656 512 199.641V104C512 81.938 494.062 64 472 64H376.359C358.516 64 344 78.516 344 96.359C344 106.922 349.562 117.109 358.906 123.578C369.922 131.203 376 141.297 376 152C376 174.062 350.875 192 320 192S264 174.062 264 152C264 141.297 270.078 131.203 281.094 123.578C290.438 117.125 296 106.938 296 96.359C296 78.516 281.484 64 263.641 64H168C145.938 64 128 81.938 128 104V199.641C128 208.656 120.656 216 111.641 216C106.234 216 101.109 213.078 97.578 207.984C87.031 192.734 71.875 184 56 184C25.125 184 0 216.297 0 256S25.125 328 56 328C71.875 328 87.031 319.25 97.578 304.016C101.109 298.922 106.234 296 111.641 296C120.656 296 128 303.344 128 312.359V408C128 430.062 145.938 448 168 448H263.641C281.484 448 296 433.484 296 415.641C296 405.062 290.438 394.875 281.094 388.422C270.078 380.797 264 370.703 264 360C264 337.938 289.125 320 320 320S376 337.938 376 360C376 370.703 369.922 380.797 358.891 388.422C349.562 394.891 344 405.078 344 415.641C344 433.484 358.516 448 376.359 448H472C494.062 448 512 430.062 512 408V312.359C512 303.344 519.344 296 528.359 296C533.766 296 538.891 298.922 542.422 304C552.969 319.25 568.125 328 584 328C614.875 328 640 295.703 640 256S614.875 184 584 184ZM584 312C573.297 312 563.203 305.922 555.578 294.891C549.109 285.562 538.922 280 528.359 280C510.516 280 496 294.516 496 312.359V408C496 421.234 485.234 432 472 432H376.359C367.344 432 360 424.656 360 415.641C360 410.234 362.922 405.109 368 401.578C383.25 391.031 392 375.875 392 360C392 329.125 359.703 304 320 304S248 329.125 248 360C248 375.875 256.75 391.031 272 401.578C277.078 405.094 280 410.219 280 415.641C280 424.656 272.656 432 263.641 432H168C154.766 432 144 421.234 144 408V312.359C144 294.516 129.484 280 111.641 280C101.078 280 90.891 285.562 84.422 294.906C76.797 305.922 66.703 312 56 312C33.938 312 16 286.875 16 256S33.938 200 56 200C66.703 200 76.797 206.062 84.422 217.078C90.891 226.422 101.062 232 111.641 232C129.484 232 144 217.484 144 199.641V104C144 90.766 154.766 80 168 80H263.641C272.656 80 280 87.344 280 96.359C280 101.781 277.078 106.906 272 110.422C256.75 120.969 248 136.125 248 152C248 182.875 280.297 208 320 208S392 182.875 392 152C392 136.125 383.25 120.969 368.016 110.422C362.922 106.891 360 101.766 360 96.359C360 87.344 367.344 80 376.359 80H472C485.234 80 496 90.766 496 104V199.641C496 217.484 510.516 232 528.359 232C538.938 232 549.109 226.422 555.578 217.078C563.203 206.062 573.297 200 584 200C606.062 200 624 225.125 624 256S606.062 312 584 312Z" />
        </Icon>
    </>
}