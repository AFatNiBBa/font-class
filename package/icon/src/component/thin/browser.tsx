
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `browser` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=thin browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwVjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDQ2NEM0OTAuNTEgNDgwIDUxMiA0NTguNTEgNTEyIDQzMlY4MEM1MTIgNTMuNDkgNDkwLjUxIDMyIDQ2NCAzMlpNMTYgODBDMTYgNjIuMzU1IDMwLjM1NSA0OCA0OCA0OEg4OFYxMjhIMTZWODBaTTQ5NiA0MzJDNDk2IDQ0OS42NDUgNDgxLjY0NSA0NjQgNDY0IDQ2NEg0OEMzMC4zNTUgNDY0IDE2IDQ0OS42NDUgMTYgNDMyVjE0NEg0OTZWNDMyWk00OTYgMTI4SDEwNFY0OEg0NjRDNDgxLjY0NSA0OCA0OTYgNjIuMzU1IDQ5NiA4MFYxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Browser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V80C512 53.49 490.51 32 464 32ZM16 80C16 62.355 30.355 48 48 48H88V128H16V80ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144H496V432ZM496 128H104V48H464C481.645 48 496 62.355 496 80V128Z" />
        </Icon>
    </>
}