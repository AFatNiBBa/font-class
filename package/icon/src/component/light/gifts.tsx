
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gifts` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gifts?s=light gifts}
 * @preview ![gifts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01ODIuNzI5IDIyNC42NzhDNTg4LjQ4NCAyMTUuMDc4IDU5MiAyMDMuOTg0IDU5MiAxOTJDNTkyIDE1Ni43MDMgNTYzLjI4MSAxMjggNTI4IDEyOEM0ODguNTk2IDEyOCA0NTMuNzc5IDE3MC4wMjkgNDMyIDIwNC4wNjhDNDEwLjIyMSAxNzAuMDI5IDM3NS40MDQgMTI4IDMzNiAxMjhDMzAwLjcxOSAxMjggMjcyIDE1Ni43MDMgMjcyIDE5MkMyNzIgMjAzLjk4NCAyNzUuNTE2IDIxNS4wNzggMjgxLjI3MSAyMjQuNjc4QzI0OS4xMzMgMjI4LjA4NCAyMjQgMjU0Ljk1OSAyMjQgMjg4VjQ0OEMyMjQgNDgzLjM0NiAyNTIuNjU0IDUxMiAyODggNTEySDU3NkM2MTEuMzQ4IDUxMiA2NDAgNDgzLjM0NiA2NDAgNDQ4VjI4OEM2NDAgMjU0Ljk1OSA2MTQuODY3IDIyOC4wODQgNTgyLjcyOSAyMjQuNjc4Wk0zMzYgMTYwQzM1NS4yMjcgMTYwIDM4Mi4xNzIgMTg1LjAxOCA0MDYuNjU2IDIyNEgzMzZDMzE4LjM0NCAyMjQgMzA0IDIwOS42NDEgMzA0IDE5MlMzMTguMzQ0IDE2MCAzMzYgMTYwWk00MTYgNDgwSDI4OEMyNzAuMzU1IDQ4MCAyNTYgNDY1LjY0NSAyNTYgNDQ4VjM4NEg0MTZWNDgwWk00MTYgMzUySDI1NlYyODhDMjU2IDI3MC4zNTUgMjcwLjM1NSAyNTYgMjg4IDI1Nkg0MTZWMzUyWk01MjggMTYwQzU0NS42NTYgMTYwIDU2MCAxNzQuMzU5IDU2MCAxOTJTNTQ1LjY1NiAyMjQgNTI4IDIyNEg0NTcuMzQ2QzQ4MS44MyAxODUuMDE4IDUwOC43NzMgMTYwIDUyOCAxNjBaTTYwOCA0NDhDNjA4IDQ2NS42NDUgNTkzLjY0NSA0ODAgNTc2IDQ4MEg0NDhWMzg0SDYwOFY0NDhaTTYwOCAzNTJINDQ4VjI1Nkg1NzZDNTkzLjY0NSAyNTYgNjA4IDI3MC4zNTUgNjA4IDI4OFYzNTJaTTE3NiA0ODBINjRDNDYuMzI4IDQ4MCAzMiA0NjUuNjc0IDMyIDQ0OFYxNjBDMzIgMTQyLjMyNiA0Ni4zMjggMTI4IDY0IDEyOEgyNDBDMjQ4LjgzOCAxMjggMjU2IDEyMC44MzYgMjU2IDExMlMyNDguODM4IDk2IDI0MCA5NkgyMTUuNzdMMjY0LjQ2OSA2NS41NjJDMjcxLjk2OSA2MC44OTEgMjc0LjI1IDUxLjAxNiAyNjkuNTYzIDQzLjUxNkMyNjQuODc1IDM2IDI1NC45NjkgMzMuNzY2IDI0Ny41MzEgMzguNDM4TDE5OS43NDQgNjguMjk1TDIyMi4zMTIgMjMuMTU2QzIyNi4yNSAxNS4yNSAyMjMuMDYyIDUuNjQxIDIxNS4xNTYgMS42ODhDMjA3LjI4MSAtMi4yMTkgMTk3LjY1NiAwLjk1MyAxOTMuNjg4IDguODQ0TDE2MCA3Ni4yMTlMMTI2LjMxMiA4Ljg0NEMxMjIuMzQ0IDAuOTIyIDExMi43NSAtMi4yNSAxMDQuODQ0IDEuNjg4Qzk2LjkzOCA1LjY0MSA5My43NSAxNS4yNSA5Ny42ODggMjMuMTU2TDEyMC4yNTYgNjguMjk1TDcyLjQ2OSAzOC40MzhDNjUuMDYyIDMzLjc2NiA1NS4xMjUgMzYgNTAuNDM4IDQzLjUxNkM0NS43NSA1MS4wMTYgNDguMDMxIDYwLjg5MSA1NS41MzEgNjUuNTYyTDEwNC4yMyA5Nkg2NEMyOC42NTQgOTYgMCAxMjQuNjU0IDAgMTYwVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMTc2QzE4NC44MzggNTEyIDE5MiA1MDQuODM2IDE5MiA0OTZTMTg0LjgzOCA0ODAgMTc2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Gifts(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M582.729 224.678C588.484 215.078 592 203.984 592 192C592 156.703 563.281 128 528 128C488.596 128 453.779 170.029 432 204.068C410.221 170.029 375.404 128 336 128C300.719 128 272 156.703 272 192C272 203.984 275.516 215.078 281.271 224.678C249.133 228.084 224 254.959 224 288V448C224 483.346 252.654 512 288 512H576C611.348 512 640 483.346 640 448V288C640 254.959 614.867 228.084 582.729 224.678ZM336 160C355.227 160 382.172 185.018 406.656 224H336C318.344 224 304 209.641 304 192S318.344 160 336 160ZM416 480H288C270.355 480 256 465.645 256 448V384H416V480ZM416 352H256V288C256 270.355 270.355 256 288 256H416V352ZM528 160C545.656 160 560 174.359 560 192S545.656 224 528 224H457.346C481.83 185.018 508.773 160 528 160ZM608 448C608 465.645 593.645 480 576 480H448V384H608V448ZM608 352H448V256H576C593.645 256 608 270.355 608 288V352ZM176 480H64C46.328 480 32 465.674 32 448V160C32 142.326 46.328 128 64 128H240C248.838 128 256 120.836 256 112S248.838 96 240 96H215.77L264.469 65.562C271.969 60.891 274.25 51.016 269.563 43.516C264.875 36 254.969 33.766 247.531 38.438L199.744 68.295L222.312 23.156C226.25 15.25 223.062 5.641 215.156 1.688C207.281 -2.219 197.656 0.953 193.688 8.844L160 76.219L126.312 8.844C122.344 0.922 112.75 -2.25 104.844 1.688C96.938 5.641 93.75 15.25 97.688 23.156L120.256 68.295L72.469 38.438C65.062 33.766 55.125 36 50.438 43.516C45.75 51.016 48.031 60.891 55.531 65.562L104.23 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H176C184.838 512 192 504.836 192 496S184.838 480 176 480Z" />
        </Icon>
    </>
}