
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bank` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bank?s=regular bank}
 * @preview ![bank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggNDYyLjE3MkgyNEMxMC44MDEgNDYyLjE3MiAwIDQ3Mi45NzEgMCA0ODYuMTcyQzAgNDk5LjM3MSAxMC44MDEgNTEwLjE3MiAyNCA1MTAuMTcySDQ4OEM1MDEuMTk5IDUxMC4xNzIgNTEyIDQ5OS4zNzEgNTEyIDQ4Ni4xNzJDNTEyIDQ3Mi45NzEgNTAxLjE5OSA0NjIuMTcyIDQ4OCA0NjIuMTcyWk00NTYgNDMwLjE3MkM0NjkuMTk5IDQzMC4xNzIgNDgwIDQxOS4zNzEgNDgwIDQwNi4xNzJDNDgwIDM5Mi45NzEgNDY5LjE5OSAzODIuMTcyIDQ1NiAzODIuMTcySDU2QzQyLjgwMSAzODIuMTcyIDMyIDM5Mi45NzEgMzIgNDA2LjE3MkMzMiA0MTkuMzcxIDQyLjgwMSA0MzAuMTcyIDU2IDQzMC4xNzJINDU2Wk00OTcuMTcyIDk1Ljk4NEwyNjUuMTcyIC0wLjAxNkMyNTkuMjk3IC0yLjQ1MyAyNTIuNzAzIC0yLjQ1MyAyNDYuODI4IC0wLjAxNkwxNC44MjggOTUuOTg0QzUuODQ0IDk5LjcwMyAwIDEwOC40NTMgMCAxMTguMTcyVjE4Mi4xNzJDMCAxOTUuNDIyIDEwLjc1IDIwNi4xNzIgMjQgMjA2LjE3Mkg2NFYzNTAuMTcySDExMlYyMDYuMTcySDE3NlYzNTAuMTcySDIyNFYyMDYuMTcySDI4OFYzNTAuMTcySDMzNlYyMDYuMTcySDQwMFYzNTAuMTcySDQ0OFYyMDYuMTcySDQ4OEM1MDEuMjUgMjA2LjE3MiA1MTIgMTk1LjQyMiA1MTIgMTgyLjE3MlYxMTguMTcyQzUxMiAxMDguNDUzIDUwNi4xNTYgOTkuNzAzIDQ5Ny4xNzIgOTUuOTg0Wk00NjQgMTU4LjE3MkgzMDEuMDYyQzMwMi44NSAxNTMuMTQ1IDMwNCAxNDcuODEyIDMwNCAxNDIuMTcyQzMwNCAxMTUuNjYyIDI4Mi41MSA5NC4xNzIgMjU2IDk0LjE3MlMyMDggMTE1LjY2MiAyMDggMTQyLjE3MkMyMDggMTQ3LjgxMiAyMDkuMTUgMTUzLjE0NSAyMTAuOTM4IDE1OC4xNzJINDhWMTM0LjIwM0wyNTYgNDguMTQxTDQ2NCAxMzQuMjAzVjE1OC4xNzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Bank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 462.172H24C10.801 462.172 0 472.971 0 486.172C0 499.371 10.801 510.172 24 510.172H488C501.199 510.172 512 499.371 512 486.172C512 472.971 501.199 462.172 488 462.172ZM456 430.172C469.199 430.172 480 419.371 480 406.172C480 392.971 469.199 382.172 456 382.172H56C42.801 382.172 32 392.971 32 406.172C32 419.371 42.801 430.172 56 430.172H456ZM497.172 95.984L265.172 -0.016C259.297 -2.453 252.703 -2.453 246.828 -0.016L14.828 95.984C5.844 99.703 0 108.453 0 118.172V182.172C0 195.422 10.75 206.172 24 206.172H64V350.172H112V206.172H176V350.172H224V206.172H288V350.172H336V206.172H400V350.172H448V206.172H488C501.25 206.172 512 195.422 512 182.172V118.172C512 108.453 506.156 99.703 497.172 95.984ZM464 158.172H301.062C302.85 153.145 304 147.812 304 142.172C304 115.662 282.51 94.172 256 94.172S208 115.662 208 142.172C208 147.812 209.15 153.145 210.938 158.172H48V134.203L256 48.141L464 134.203V158.172Z" />
        </Icon>
    </>
}