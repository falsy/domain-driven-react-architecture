import { css } from "@emotion/react"
import ICard from "adapters/domains/entities/interfaces/ICard"

export default function CardItem({ card }: { card: ICard }) {
  return (
    <div
      css={css`
        background: ${card.cardType === "CREDIT" ? "#f5f5f5" : "#fff"};
        border-radius: 8px;
        border: 1px solid #eaeaea;
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 0.5rem;
        p {
          font-size: 0.8rem;
          span {
            font-size: 0.6rem;
            text-transform: uppercase;
            font-weight: 600;
            color: #aaa;
          }
        }
        @media (max-width: 500px) {
          padding: 0.7rem 1rem;
          grid-template-columns: repeat(2, 1fr);
          p {
            margin: 0.3rem 0;
          }
        }
      `}
    >
      <p>
        <span>Type.</span> {card.cardType}
      </p>
      <p>
        <span>Name.</span> {card.cardCompany}
      </p>
      <p>
        <span>Number.</span> {card.cardNumber}
      </p>
    </div>
  )
}
