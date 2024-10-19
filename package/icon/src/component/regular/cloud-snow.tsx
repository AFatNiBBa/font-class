
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-snow` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-snow?s=regular cloud-snow}
 * @preview ![cloud-snow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDggMzIwSDQwNEM0NjMuNjI1IDMyMCA1MTIgMjcxLjUgNTEyIDIxMkM1MTIgMTU0Ljc1IDQ2Ny4xMjUgMTA3Ljc1IDQxMC43NSAxMDQuMjVDMzk3LjI1IDYxLjc1IDM1OCAzMiAzMTIgMzJDMjk4LjUgMzIgMjg1LjI1IDM0LjYyNSAyNzIuNzUgMzkuNzVDMjUwLjI1IDE0LjUgMjE4LjM3NSAwIDE4NCAwQzEyMCAwIDY3LjYyNSA1MC4yNSA2NC4yNSAxMTMuMzc1QzI1LjYyNSAxMzAuMzc1IDAgMTY4LjUgMCAyMTJDMCAyNzEuNSA0OC4zNzUgMzIwIDEwOCAzMjBaTTk0LjM3NSAxNTMuNzVMMTE1LjEyNSAxNDguODc1TDExMi4zNzUgMTI0QzExMi4yNSAxMjIuNzUgMTEyIDEyMS4zNzUgMTEyIDEyMEMxMTIgODAuMjUgMTQ0LjI1IDQ4IDE4NCA0OEMyMDkuMjUgNDggMjMyLjI1IDYxLjEyNSAyNDUuMzc1IDgzLjEyNUwyNTguNzUgMTA1LjI1TDI3OS43NSA5MC4yNUMyODkuMzc1IDgzLjYyNSAzMDAuNSA4MCAzMTIgODBDMzQwLjYyNSA4MCAzNjQuMzc1IDEwMS43NSAzNjcuMjUgMTMwLjM3NUwzNjkuNSAxNTJINDA0QzQzNy4xMjUgMTUyIDQ2NCAxNzguODc1IDQ2NCAyMTJTNDM3LjEyNSAyNzIgNDA0IDI3MkgxMDhDNzQuODc1IDI3MiA0OCAyNDUuMTI1IDQ4IDIxMkM0OCAxODQgNjcuMTI1IDE2MCA5NC4zNzUgMTUzLjc1Wk0xMDQgMzkySDg4VjM3NkM4OCAzNjIuNzUgNzcuMjUgMzUyIDY0IDM1MlM0MCAzNjIuNzUgNDAgMzc2VjM5MkgyNEMxMC43NSAzOTIgMCA0MDIuNzUgMCA0MTZTMTAuNzUgNDQwIDI0IDQ0MEg0MFY0NTZDNDAgNDY5LjI1IDUwLjc1IDQ4MCA2NCA0ODBTODggNDY5LjI1IDg4IDQ1NlY0NDBIMTA0QzExNy4yNSA0NDAgMTI4IDQyOS4yNSAxMjggNDE2UzExNy4yNSAzOTIgMTA0IDM5MlpNNDg4IDM5Mkg0NzJWMzc2QzQ3MiAzNjIuNzUgNDYxLjI1IDM1MiA0NDggMzUyUzQyNCAzNjIuNzUgNDI0IDM3NlYzOTJINDA4QzM5NC43NSAzOTIgMzg0IDQwMi43NSAzODQgNDE2UzM5NC43NSA0NDAgNDA4IDQ0MEg0MjRWNDU2QzQyNCA0NjkuMjUgNDM0Ljc1IDQ4MCA0NDggNDgwUzQ3MiA0NjkuMjUgNDcyIDQ1NlY0NDBINDg4QzUwMS4yNSA0NDAgNTEyIDQyOS4yNSA1MTIgNDE2UzUwMS4yNSAzOTIgNDg4IDM5MlpNMjk2IDQyNEgyODBWNDA4QzI4MCAzOTQuNzUgMjY5LjI1IDM4NCAyNTYgMzg0UzIzMiAzOTQuNzUgMjMyIDQwOFY0MjRIMjE2QzIwMi43NSA0MjQgMTkyIDQzNC43NSAxOTIgNDQ4UzIwMi43NSA0NzIgMjE2IDQ3MkgyMzJWNDg4QzIzMiA1MDEuMjUgMjQyLjc1IDUxMiAyNTYgNTEyUzI4MCA1MDEuMjUgMjgwIDQ4OFY0NzJIMjk2QzMwOS4yNSA0NzIgMzIwIDQ2MS4yNSAzMjAgNDQ4UzMwOS4yNSA0MjQgMjk2IDQyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudSnow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M108 320H404C463.625 320 512 271.5 512 212C512 154.75 467.125 107.75 410.75 104.25C397.25 61.75 358 32 312 32C298.5 32 285.25 34.625 272.75 39.75C250.25 14.5 218.375 0 184 0C120 0 67.625 50.25 64.25 113.375C25.625 130.375 0 168.5 0 212C0 271.5 48.375 320 108 320ZM94.375 153.75L115.125 148.875L112.375 124C112.25 122.75 112 121.375 112 120C112 80.25 144.25 48 184 48C209.25 48 232.25 61.125 245.375 83.125L258.75 105.25L279.75 90.25C289.375 83.625 300.5 80 312 80C340.625 80 364.375 101.75 367.25 130.375L369.5 152H404C437.125 152 464 178.875 464 212S437.125 272 404 272H108C74.875 272 48 245.125 48 212C48 184 67.125 160 94.375 153.75ZM104 392H88V376C88 362.75 77.25 352 64 352S40 362.75 40 376V392H24C10.75 392 0 402.75 0 416S10.75 440 24 440H40V456C40 469.25 50.75 480 64 480S88 469.25 88 456V440H104C117.25 440 128 429.25 128 416S117.25 392 104 392ZM488 392H472V376C472 362.75 461.25 352 448 352S424 362.75 424 376V392H408C394.75 392 384 402.75 384 416S394.75 440 408 440H424V456C424 469.25 434.75 480 448 480S472 469.25 472 456V440H488C501.25 440 512 429.25 512 416S501.25 392 488 392ZM296 424H280V408C280 394.75 269.25 384 256 384S232 394.75 232 408V424H216C202.75 424 192 434.75 192 448S202.75 472 216 472H232V488C232 501.25 242.75 512 256 512S280 501.25 280 488V472H296C309.25 472 320 461.25 320 448S309.25 424 296 424Z" />
        </Icon>
    </>
}