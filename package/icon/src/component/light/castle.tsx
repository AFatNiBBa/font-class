
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=light castle}
 * @preview ![castle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMTYwSDU3NkM1NTguMzI2IDE2MCA1NDQgMTc0LjMyNiA1NDQgMTkyVjIyNEg1MTJWMzJDNTEyIDE0LjMyNiA0OTcuNjc0IDAgNDgwIDBINDQwQzQyMi4zMjYgMCA0MDggMTQuMzI2IDQwOCAzMlY2NEgzNzZWMzJDMzc2IDE0LjMyNiAzNjEuNjc0IDAgMzQ0IDBIMjk2QzI3OC4zMjYgMCAyNjQgMTQuMzI2IDI2NCAzMlY2NEgyMzJWMzJDMjMyIDE0LjMyNiAyMTcuNjc0IDAgMjAwIDBIMTYwQzE0Mi4zMjYgMCAxMjggMTQuMzI2IDEyOCAzMlYyMjRIOTZWMTkyQzk2IDE3NC4zMjYgODEuNjc0IDE2MCA2NCAxNjBIMzJDMTQuMzI2IDE2MCAwIDE3NC4zMjYgMCAxOTJWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkg1NzZDNjExLjM0NiA1MTIgNjQwIDQ4My4zNDYgNjQwIDQ0OFYxOTJDNjQwIDE3NC4zMjYgNjI1LjY3NCAxNjAgNjA4IDE2MFpNMTYwIDMySDIwMFY5NkgyOTZWMzJIMzQ0Vjk2SDQ0MFYzMkg0ODBWMjI0SDE2MFYzMlpNMzg0IDQ4MEgyNTZWMzg0QzI1NiAzNDguNzExIDI4NC43MTEgMzIwIDMyMCAzMjBTMzg0IDM0OC43MTEgMzg0IDM4NFY0ODBaTTYwOCA0NDhDNjA4IDQ2NS42NDUgNTkzLjY0NSA0ODAgNTc2IDQ4MEg0MTZWMzg0QzQxNiAzMzAuOTggMzczLjAyIDI4OCAzMjAgMjg4UzIyNCAzMzAuOTggMjI0IDM4NFY0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFYxOTJINjRWMjU2SDU3NlYxOTJINjA4VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Castle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 160H576C558.326 160 544 174.326 544 192V224H512V32C512 14.326 497.674 0 480 0H440C422.326 0 408 14.326 408 32V64H376V32C376 14.326 361.674 0 344 0H296C278.326 0 264 14.326 264 32V64H232V32C232 14.326 217.674 0 200 0H160C142.326 0 128 14.326 128 32V224H96V192C96 174.326 81.674 160 64 160H32C14.326 160 0 174.326 0 192V448C0 483.346 28.654 512 64 512H576C611.346 512 640 483.346 640 448V192C640 174.326 625.674 160 608 160ZM160 32H200V96H296V32H344V96H440V32H480V224H160V32ZM384 480H256V384C256 348.711 284.711 320 320 320S384 348.711 384 384V480ZM608 448C608 465.645 593.645 480 576 480H416V384C416 330.98 373.02 288 320 288S224 330.98 224 384V480H64C46.355 480 32 465.645 32 448V192H64V256H576V192H608V448Z" />
        </Icon>
    </>
}