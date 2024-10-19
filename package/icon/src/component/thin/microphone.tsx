
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `microphone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=thin microphone}
 * @preview ![microphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMzUyQzI0NS4wMzEgMzUyIDI4OCAzMDkuMDMxIDI4OCAyNTZWOTZDMjg4IDQyLjk2OSAyNDUuMDMxIDAgMTkyIDBTOTYgNDIuOTY5IDk2IDk2VjI1NkM5NiAzMDkuMDMxIDEzOC45NjkgMzUyIDE5MiAzNTJaTTExMiA5NkMxMTIgNTEuODg5IDE0Ny44ODcgMTYgMTkyIDE2UzI3MiA1MS44ODkgMjcyIDk2VjI1NkMyNzIgMzAwLjExMSAyMzYuMTEzIDMzNiAxOTIgMzM2UzExMiAzMDAuMTExIDExMiAyNTZWOTZaTTM1MiAyNTZWMjAwQzM1MiAxOTUuNTk0IDM0OC40MDYgMTkyIDM0NCAxOTJTMzM2IDE5NS41OTQgMzM2IDIwMFYyNTZDMzM2IDMzNS40MDYgMjcxLjQwNiA0MDAgMTkyIDQwMFM0OCAzMzUuNDA2IDQ4IDI1NlYyMDBDNDggMTk1LjU5NCA0NC40MDYgMTkyIDQwIDE5MlMzMiAxOTUuNTk0IDMyIDIwMFYyNTZDMzIgMzQxLjQ3OSA5OS41NjIgNDEwLjkyNCAxODQgNDE1LjE5MVY0OTZINzJDNjcuNTk0IDQ5NiA2NCA0OTkuNTk0IDY0IDUwNFM2Ny41OTQgNTEyIDcyIDUxMkgzMTJDMzE2LjQwNiA1MTIgMzIwIDUwOC40MDYgMzIwIDUwNFMzMTYuNDA2IDQ5NiAzMTIgNDk2SDIwMFY0MTUuMTkxQzI4NC40MzggNDEwLjkyNCAzNTIgMzQxLjQ3OSAzNTIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Microphone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 352C245.031 352 288 309.031 288 256V96C288 42.969 245.031 0 192 0S96 42.969 96 96V256C96 309.031 138.969 352 192 352ZM112 96C112 51.889 147.887 16 192 16S272 51.889 272 96V256C272 300.111 236.113 336 192 336S112 300.111 112 256V96ZM352 256V200C352 195.594 348.406 192 344 192S336 195.594 336 200V256C336 335.406 271.406 400 192 400S48 335.406 48 256V200C48 195.594 44.406 192 40 192S32 195.594 32 200V256C32 341.479 99.562 410.924 184 415.191V496H72C67.594 496 64 499.594 64 504S67.594 512 72 512H312C316.406 512 320 508.406 320 504S316.406 496 312 496H200V415.191C284.438 410.924 352 341.479 352 256Z" />
        </Icon>
    </>
}