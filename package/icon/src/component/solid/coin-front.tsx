
import { Icon } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=solid coin-front}
 * @preview ![coin-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2ek0yNTYgOTZhMTYwIDE2MCAwIDEgMSAwIDMyMCAxNjAgMTYwIDAgMSAxIDAtMzIwem0wIDM1MmExOTIgMTkyIDAgMSAwIDAtMzg0IDE5MiAxOTIgMCAxIDAgMCAzODR6bTI0LTI2NGMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNGwwIDE0NGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMTQ0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm24-264c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
    </Icon>
);

export default CoinFront;