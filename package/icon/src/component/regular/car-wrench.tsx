
import { Icon } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=regular car-wrench}
 * @preview ![car-wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY4LjkgMTA0TDQ1NiAxMDRsLS41IDBjLS43IDAtMS40LS4xLTIuMS0uMUM0NDEuMyAxMDIuNSA0MzIgOTIuNCA0MzIgODBzOS4zLTIyLjUgMjEuMy0yMy45Yy43LS4xIDEuNC0uMSAyLjEtLjFsLjUgMCAxMi45IDAgMTcuNiAwYzEwLjggMCAxOC40LTEwLjYgMTIuNS0xOS42Yy0zLjYtNS41LTcuOC0xMC41LTEyLjUtMTQuOWMtNC4yLTMuOS04LjgtNy40LTEzLjgtMTAuM0M0NzAuOCAxMCA0NjguOSA5IDQ2Ni45IDhDNDU2LjQgMi45IDQ0NC41IDAgNDMyIDBjLTI5LjEgMC01NC41IDE1LjUtNjguNSAzOC43Yy0zLjMgNS40LTguOSA5LjMtMTUuMyA5LjNMMTYzLjggNDhjLTYuNCAwLTEyLTMuOC0xNS4zLTkuM0MxMzQuNSAxNS41IDEwOS4xIDAgODAgMEM2Ny41IDAgNTUuNiAyLjkgNDUuMSA4Yy0yIDEtMy45IDItNS44IDMuMWMtNSAyLjktOS42IDYuNC0xMy44IDEwLjNjLTQuNyA0LjQtOSA5LjQtMTIuNSAxNC45QzcgNDUuNCAxNC43IDU2IDI1LjUgNTZsMTcuNiAwTDU2IDU2bC41IDBjLjcgMCAxLjQgLjEgMi4xIC4xQzcwLjcgNTcuNSA4MCA2Ny42IDgwIDgwcy05LjMgMjIuNS0yMS4zIDIzLjljLS43IC4xLTEuNCAuMS0yLjEgLjFsLS41IDAtMTIuOSAwLTE3LjYgMEMxNC43IDEwNCA3IDExNC42IDEyLjkgMTIzLjZjMy42IDUuNSA3LjggMTAuNSAxMi41IDE0LjljNC4yIDMuOSA4LjggNy40IDEzLjggMTAuM2MxLjkgMS4xIDMuOCAyLjIgNS44IDMuMWMxMC42IDUuMSAyMi40IDggMzQuOSA4YzI5LjEgMCA1NC41LTE1LjUgNjguNS0zOC43YzMuMy01LjQgOC45LTkuMyAxNS4zLTkuM2wxODQuNCAwYzYuNCAwIDEyIDMuOCAxNS4zIDkuM2MxNCAyMy4yIDM5LjUgMzguNyA2OC41IDM4LjdjMTIuNSAwIDI0LjQtMi45IDM0LjktOGMyLTEgMy45LTIgNS44LTMuMWM1LTIuOSA5LjYtNi40IDEzLjgtMTAuM2M0LjctNC40IDktOS40IDEyLjUtMTQuOWM1LjktOS0xLjctMTkuNi0xMi41LTE5LjZsLTE3LjYgMHpNMTg1LjggMjA4bDE0MC4zIDBjMTAuMSAwIDE5LjIgNi40IDIyLjYgMTUuOUwzNjUuOSAyNzJsLTIxOS45IDAgMTcuMi00OC4xYzMuNC05LjYgMTIuNS0xNS45IDIyLjYtMTUuOXpNODkuNCAyODcuOWMtLjIgLjUtLjMgLjktLjUgMS40QzY0LjIgMzA2LjcgNDggMzM1LjUgNDggMzY4bDAgMzIgMCAxNiAwIDMyIDAgNDBjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTQwIDMyMCAwIDAgNDBjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTQwIDAtMzIgMC0xNiAwLTMyYzAtMzIuNS0xNi4yLTYxLjMtNDAuOS03OC43Yy0uMS0uNS0uMy0uOS0uNS0xLjRMMzk0IDIwNy44Yy0xMC4yLTI4LjctMzcuNC00Ny44LTY3LjgtNDcuOGwtMTQwLjMgMGMtMzAuNCAwLTU3LjYgMTkuMS02Ny44IDQ3LjhMODkuNCAyODcuOXpNMzY4IDMyMGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDMyTDk2IDQwMGwwLTMyYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4bDIyNCAwek0xNjAgMzg0YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHptMjE2LTI0YTI0IDI0IDAgMSAwIC00OCAwIDI0IDI0IDAgMSAwIDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M468.9 104L456 104l-.5 0c-.7 0-1.4-.1-2.1-.1C441.3 102.5 432 92.4 432 80s9.3-22.5 21.3-23.9c.7-.1 1.4-.1 2.1-.1l.5 0 12.9 0 17.6 0c10.8 0 18.4-10.6 12.5-19.6c-3.6-5.5-7.8-10.5-12.5-14.9c-4.2-3.9-8.8-7.4-13.8-10.3C470.8 10 468.9 9 466.9 8C456.4 2.9 444.5 0 432 0c-29.1 0-54.5 15.5-68.5 38.7c-3.3 5.4-8.9 9.3-15.3 9.3L163.8 48c-6.4 0-12-3.8-15.3-9.3C134.5 15.5 109.1 0 80 0C67.5 0 55.6 2.9 45.1 8c-2 1-3.9 2-5.8 3.1c-5 2.9-9.6 6.4-13.8 10.3c-4.7 4.4-9 9.4-12.5 14.9C7 45.4 14.7 56 25.5 56l17.6 0L56 56l.5 0c.7 0 1.4 .1 2.1 .1C70.7 57.5 80 67.6 80 80s-9.3 22.5-21.3 23.9c-.7 .1-1.4 .1-2.1 .1l-.5 0-12.9 0-17.6 0C14.7 104 7 114.6 12.9 123.6c3.6 5.5 7.8 10.5 12.5 14.9c4.2 3.9 8.8 7.4 13.8 10.3c1.9 1.1 3.8 2.2 5.8 3.1c10.6 5.1 22.4 8 34.9 8c29.1 0 54.5-15.5 68.5-38.7c3.3-5.4 8.9-9.3 15.3-9.3l184.4 0c6.4 0 12 3.8 15.3 9.3c14 23.2 39.5 38.7 68.5 38.7c12.5 0 24.4-2.9 34.9-8c2-1 3.9-2 5.8-3.1c5-2.9 9.6-6.4 13.8-10.3c4.7-4.4 9-9.4 12.5-14.9c5.9-9-1.7-19.6-12.5-19.6l-17.6 0zM185.8 208l140.3 0c10.1 0 19.2 6.4 22.6 15.9L365.9 272l-219.9 0 17.2-48.1c3.4-9.6 12.5-15.9 22.6-15.9zM89.4 287.9c-.2 .5-.3 .9-.5 1.4C64.2 306.7 48 335.5 48 368l0 32 0 16 0 32 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 320 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 0-32 0-16 0-32c0-32.5-16.2-61.3-40.9-78.7c-.1-.5-.3-.9-.5-1.4L394 207.8c-10.2-28.7-37.4-47.8-67.8-47.8l-140.3 0c-30.4 0-57.6 19.1-67.8 47.8L89.4 287.9zM368 320c26.5 0 48 21.5 48 48l0 32L96 400l0-32c0-26.5 21.5-48 48-48l224 0zM160 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CarWrench;