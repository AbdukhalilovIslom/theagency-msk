"use client";
import React, { useState } from "react";
import classes from "./styles.module.css";
import BackShape from "@/layout/backShape/backShape";
import Image from "next/image";
import image_1 from "../../../../../assets/images/qwe/qwe.png";
import image_2 from "../../../../../assets/images/qwe/qwe2.png";
import image_3 from "../../../../../assets/images/qwe/qwe3.png";
import image1 from "../../../../../assets/images/qwe/1.png";
import image2 from "../../../../../assets/images/qwe/2.png";
import image3 from "../../../../../assets/images/qwe/3.png";
import image4 from "../../../../../assets/images/qwe/4.png";
import image5 from "../../../../../assets/images/qwe/5.png";
import image6 from "../../../../../assets/images/qwe/6.png";
import image11 from "../../../../../assets/images/qwe/11.png";
import image22 from "../../../../../assets/images/qwe/22.png";
import image33 from "../../../../../assets/images/qwe/33.png";
import image44 from "../../../../../assets/images/qwe/44.png";
import image55 from "../../../../../assets/images/qwe/55.png";
import image66 from "../../../../../assets/images/qwe/66.png";
import img1_3 from "../../../../../assets/images/qwe/1:3.png";
import img1_2 from "../../../../../assets/images/qwe/1_2.png";
import img1_2_2 from "../../../../../assets/images/qwe/1_2_2.png";
import img2_2 from "../../../../../assets/images/qwe/2_2.png";
import img2_1 from "../../../../../assets/images/qwe/2_1.png";
import img2_3 from "../../../../../assets/images/qwe/2_3.png";
import img2_4 from "../../../../../assets/images/qwe/2_4.png";
import MakeApplication from "@/Components/common/makeApplication/makeApplication";

export default function page({
  params: { lng, item },
}: {
  params: { lng: string; item: string };
}) {
  const [tab, setTab] = useState(1);

  const Tabs = () => {
    if (tab === 1) {
      return (
        <div className={classes.bottom_tab_view}>
          {item == "1" ? (
            <div style={{ maxWidth: "68vw" }}>
              <h4 style={{ fontWeight: "500" }}>Назначение</h4>
              <br />
              Грузовые стропы на текстильной основе изготавливаются из
              высококачественных полиэфирных лент и используются в качестве
              грузозахватных приспособлений для подъема различных грузов на
              промышленных, транспортных и складских предприятиях. <br />
              Петлевые однослойные и многослойные ленточные стропы (СТП)
              предназначены для навески одной петлей на крюк грузоподъемной
              машины и присоединения другой петлей непосредственно к грузу.
              <br />
              <br />
              <h4 style={{ fontWeight: "500" }}>Достоинства</h4>
              <br />
              <ul style={{ marginLeft: "20px" }}>
                <li className={classes.li}>
                  запас прочности по отношению к разрывной нагрузке не менее
                  7:1;
                </li>
                <li className={classes.li}>
                  бережное отношение к грузу, благодаря мягкости и легкости
                  строп обеспечивается деликатный подъем, груз не подвергается
                  деформации и повреждению;
                </li>
                <li className={classes.li}>
                  высокий показатель безопасности труда и удобство
                  использования;
                </li>
                <li className={classes.li}>
                  высокая устойчивость к воздействию агрессивных составляющих
                </li>
                <li className={classes.li}>
                  внешней среды (УФ излучение, щелочи, кислоты, нефтепродукты,
                  органические растворители);
                </li>
                <li className={classes.li}>
                  высокие электроизоляционные свойства;
                </li>
                <li className={classes.li}>
                  низкая водопоглощяемость (не тонет в воде);
                </li>
                <li className={classes.li}>
                  малый вес и габариты при транспортировке;
                </li>
              </ul>
            </div>
          ) : item == "2" ? (
            <div style={{ maxWidth: "68vw" }}>
              <h4 style={{ fontWeight: "500" }}>Назначение</h4>
              <br />
              Стропы из стальных канатов (также известные как чалки)
              изготавливаются согласно ГОСТ 25573-82 и предназначены для
              использования в качестве грузозахватных приспособлений в
              строительстве, на промышленных предприятиях и складских объектах,
              речных и морских портах, кораблестроении и атомной промышленности,
              железнодорожном транспорте. Двухветвевые канатные стропы 2СК
              предназначены для подъема и транспортировки грузов за две точки
              крепления. Наиболее широкое распространение стропы получили для
              строповки элементов зданий - плит, панелей, блоков и т.д. -
              снабженных петлями или проушинами.
              <br />
              <br />
              <h4 style={{ fontWeight: "500" }}>Достоинства</h4>
              <br />
              <ul style={{ marginLeft: "20px" }}>
                <li className={classes.li}>
                  высокая прочность и износоустойчивость;
                </li>
                <li className={classes.li}>
                  коэффициент запаса прочности 6:1;
                </li>
                <li className={classes.li}>
                  способность компенсировать динамические нагрузки;
                </li>
                <li className={classes.li}>
                  возможность использовать стропы при высоких температурах - до
                  +400°С (с учетом понижающих грузоподъемность коэффициентов);
                </li>
                <li className={classes.li}>
                  постепенное разрушение стропа при перегрузке, что позволяет
                  заметить его на ранних стадиях;
                </li>
              </ul>
            </div>
          ) : item == "3" ? (
            <div style={{ maxWidth: "56vw" }}>
              <h4 style={{ fontWeight: "500" }}>
                Примеры условных обозначений:
              </h4>
              <ul style={{ marginLeft: "20px", paddingTop: "20px" }}>
                <li className={classes.li}>
                  Канат стальной ГОСТ 2172-80 3,2 Ж А1:
                </li>
                <li className={classes.li}>
                  Канат стальной ГОСТ 2172-80 с конструкцией 6x19 диаметром 3,2
                  мм., из оцинкованной проволоки по группе Ж, код смазки А1
                </li>
                <li className={classes.li}>
                  Канат стальной ГОСТ 2172-80 К 4,5 А:
                </li>
                <li className={classes.li}>
                  Канат стальной ГОСТ 2172-80 с конструкцией 6x19 диаметром 4,5
                  мм., из проволоки высоколегированной коррозионностойкой стали
                  12Х18Н10Т (либо 12Х18Н9Т), код смазки А
                </li>
                <li className={classes.li}>
                  Канат стальной ГОСТ 2172-80 2,5 С-П А:
                </li>
                <li className={classes.li}>
                  Канат стальной ГОСТ 2172-80 с конструкцией 6x7 диаметром 2,5
                  мм., из оцинкованной проволоки по группе С, повышенного
                  качества, код смазки А1
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else if (tab === 2) {
      return (
        <div className={classes.bottom_tab_view}>
          {item == "1" ? (
            <div>
              <div style={{ maxWidth: "39vw" }}>
                <h4 style={{ fontWeight: "500" }}>Основные исполнения строп</h4>
                <br />
                <br />
                Строп текстильный петлевой СТП — представляет собой сшитую
                плоскую ленточную конструкцию с петлевыми окончаниями обеих
                сторон, предназначен для передачи нагрузки от подъема
                застрапованного груза на грузоподъемный орган крана.
              </div>
              <Image
                src={img1_2}
                alt="asd"
                width={620}
                height={470}
                style={{ marginTop: "30px" }}
              />
              <table className={classes.table}>
                <thead className={classes.thead}>
                  <tr className={classes.tr}>
                    <td className={classes.td}>Г/п, т</td>
                    <td className={classes.td}>
                      Ширина <br /> ленты, мм
                    </td>
                    <td className={classes.td}>
                      Минимальная
                      <br /> длина L, м
                    </td>
                    <td className={classes.td}>
                      Длина <br /> петли l, мм
                    </td>
                  </tr>
                </thead>
                <tbody className={classes.tbody}>
                  <tr className={classes.tr}>
                    <td className={classes.td}>1,0</td>
                    <td className={classes.td}>30</td>
                    <td className={classes.td}>1,0</td>
                    <td className={classes.td}>250</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>2,0</td>
                    <td className={classes.td}>60</td>
                    <td className={classes.td}>1,0</td>
                    <td className={classes.td}>350</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>3,0</td>
                    <td className={classes.td}>90</td>
                    <td className={classes.td}>1,0</td>
                    <td className={classes.td}>400</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>4,0</td>
                    <td className={classes.td}>120</td>
                    <td className={classes.td}>1,5</td>
                    <td className={classes.td}>450</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>5,0</td>
                    <td className={classes.td}>150</td>
                    <td className={classes.td}>1,5</td>
                    <td className={classes.td}>450</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>6,0</td>
                    <td className={classes.td}>180</td>
                    <td className={classes.td}>1,5</td>
                    <td className={classes.td}>500</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>8,0</td>
                    <td className={classes.td}>240</td>
                    <td className={classes.td}>2,0</td>
                    <td className={classes.td}>500</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>10,0</td>
                    <td className={classes.td}>300</td>
                    <td className={classes.td}>2,0</td>
                    <td className={classes.td}>550</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>12,0</td>
                    <td className={classes.td}>300</td>
                    <td className={classes.td}>2,0</td>
                    <td className={classes.td}>600</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>15,0</td>
                    <td className={classes.td}>300</td>
                    <td className={classes.td}>2,5</td>
                    <td className={classes.td}>600</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>20,0</td>
                    <td className={classes.td}>300</td>
                    <td className={classes.td}>2,5</td>
                    <td className={classes.td}>600</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>25,0</td>
                    <td className={classes.td}>300</td>
                    <td className={classes.td}>2,5</td>
                    <td className={classes.td}>600</td>
                  </tr>
                  <tr className={classes.tr}>
                    <td className={classes.td}>30,0</td>
                    <td className={classes.td}>300</td>
                    <td className={classes.td}>6,0</td>
                    <td className={classes.td}>600</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ maxWidth: "46vw", marginTop: "40px" }}>
                Каждый строп маркируется биркой, на которой указан товарный знак
                и адрес предприятия-изготовителя, тип, грузоподъемность, длина
                стропа, дата изготовления.
              </div>
              <Image
                src={img1_2_2}
                alt="asd"
                width={620}
                height={91}
                style={{ marginTop: "30px" }}
              />
            </div>
          ) : item == "2" ? (
            <div>
              <h4 style={{ fontWeight: "500" }}>Основные исполнения строп</h4>
              <div
                style={{ display: "flex", gap: "40px", alignItems: "center" }}
              >
                <Image
                  src={img2_1}
                  alt="asd"
                  width={138}
                  height={243}
                  style={{ marginTop: "30px" }}
                />
                <div style={{ display: "flex", flex: "1", maxWidth: "58vw" }}>
                  Двухветвевые канатные стропы состоят из двух канатных ветвей,
                  верхнего звена для навешивания на крановый крюк и захватного
                  органа для крепления груза. В петли устанавливаются стальные
                  коуши и заделываются методом заплетки или опрессовки
                  алюминиевой втулкой. <br />
                  <br />В качестве верхнего звена в базовом исполнении выступает
                  овальное звено Ов2, в качестве нижнего захватного органа -
                  крюк 320А или КЧ. При равных прочностных характеристиках крюк
                  320А значительно меньше по габаритным размерам чем чалочный
                  КЧ, это необходимо учитывать при оформлении заказа. Также
                  желательно сообщать о размерах кранового крюка для правильного
                  подбора верхнего подвесного звена. По требованию Заказчика
                  строп может комплектоваться и другими крюками и
                  приспособлениями.
                </div>
              </div>
              <table className={classes.table} style={{ width: "51vw" }}>
                <thead className={classes.thead}>
                  <tr>
                    <td className={classes.td}>Г/п, т</td>
                    <td className={classes.td}>Длина стропа L, мм</td>
                    <td className={classes.td}>Обозначение канатной ветви</td>
                    <td className={classes.td}>Ø каната ГОСТ 2688-80</td>
                    <td className={classes.td}>Ø каната ГОСТ 7668-80</td>
                  </tr>
                </thead>
                <tbody className={classes.tbody}>
                  <tr>
                    <td className={classes.td}>0,5</td>
                    <td className={classes.td}>900-5000</td>
                    <td className={classes.td}>ВК-0,4</td>
                    <td className={classes.td}>6,9</td>
                    <td className={classes.td}>6,7</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>0,8</td>
                    <td className={classes.td}>1100-10000</td>
                    <td className={classes.td}>ВК-0,63</td>
                    <td className={classes.td}>8,3</td>
                    <td className={classes.td}>8,1</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>1,0</td>
                    <td className={classes.td}>1100-15000</td>
                    <td className={classes.td}>ВК-0,8</td>
                    <td className={classes.td}>9,6</td>
                    <td className={classes.td}>-</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>1,25</td>
                    <td className={classes.td}>1100-15000</td>
                    <td className={classes.td}>ВК-1,0</td>
                    <td className={classes.td}>11,0</td>
                    <td className={classes.td}>11,5</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>1,6</td>
                    <td className={classes.td}>1100-15000</td>
                    <td className={classes.td}>ВК-1,25</td>
                    <td className={classes.td}>12,0</td>
                    <td className={classes.td}>11,5</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>2,0</td>
                    <td className={classes.td}>1400-16000</td>
                    <td className={classes.td}>ВК-1,6</td>
                    <td className={classes.td}>14,0</td>
                    <td className={classes.td}>13,5</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>2,5</td>
                    <td className={classes.td}>1400-16000</td>
                    <td className={classes.td}>ВК-2,0</td>
                    <td className={classes.td}>15,0</td>
                    <td className={classes.td}>15,0</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>3,2</td>
                    <td className={classes.td}>1400-16000</td>
                    <td className={classes.td}>ВК-2,5</td>
                    <td className={classes.td}>16,5</td>
                    <td className={classes.td}>16,5</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>4,0</td>
                    <td className={classes.td}>1500-20000</td>
                    <td className={classes.td}>ВК-3,2</td>
                    <td className={classes.td}>19,5</td>
                    <td className={classes.td}>20,0</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>5,0</td>
                    <td className={classes.td}>1500-20000</td>
                    <td className={classes.td}>ВК-4,0</td>
                    <td className={classes.td}>21,0</td>
                    <td className={classes.td}>22,0</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>6,3</td>
                    <td className={classes.td}>1500-20000</td>
                    <td className={classes.td}>ВК-5,0</td>
                    <td className={classes.td}>24,0</td>
                    <td className={classes.td}>23,5</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>8,0</td>
                    <td className={classes.td}>2000-20000</td>
                    <td className={classes.td}>ВК-6,3</td>
                    <td className={classes.td}>27,0</td>
                    <td className={classes.td}>27,0</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>10,0</td>
                    <td className={classes.td}>2000-20000</td>
                    <td className={classes.td}>ВК-8,0</td>
                    <td className={classes.td}>30,5</td>
                    <td className={classes.td}>31,0</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>12,5</td>
                    <td className={classes.td}>2000-20000</td>
                    <td className={classes.td}>ВК-10,0</td>
                    <td className={classes.td}>32,0</td>
                    <td className={classes.td}>33,0</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>16,0</td>
                    <td className={classes.td}>2000-20000</td>
                    <td className={classes.td}>ВК-12,5</td>
                    <td className={classes.td}>33,5</td>
                    <td className={classes.td}>39,5</td>
                  </tr>
                </tbody>
              </table>
              <Image
                src={img2_2}
                alt="asd"
                width={441}
                height={153}
                style={{ marginTop: "30px" }}
              />
              <div style={{ marginTop: "30px" }}>
                Каждый строп маркируется металлической биркой, на которой указан
                товарный знак, грузоподъемность, <br /> длина стропа, дата
                изготовления. Бирка размещается на теле стропа, либо вплетается
                в петлю.
              </div>
            </div>
          ) : item == "3" ? (
            <div
              style={{ width: "100%", overflow: "scroll" }}
              dangerouslySetInnerHTML={{
                __html: `
                <table border="2" cellpadding="0" cellspacing="0" class="table1">
            <thead>
              <tr>
                <td rowspan="3">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        Конструкция каната
                      </span>
                    </span>
                  </div>
                </td>
                <td colspan="5">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        Диаметр, мм
                      </span>
                    </span>
                  </div>
                </td>
                <td rowspan="3">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        Расчетная площадь сечения всех проволок каната, мм
                        <sup>2</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td rowspan="3">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        Расчетная масса одного метра смазанного каната, г,
                        не более
                      </span>
                    </span>
                  </div>
                </td>
                <td colspan="3">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        Расчетное разрывное усилие каната в целом, Н/кгс, не
                        менее
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">каната</span>
                    </span>
                  </div>
                </td>
                <td colspan="2">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        проволоки
                      </span>
                    </span>
                  </div>
                </td>
                <td colspan="2">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        из углеродистых сталей
                      </span>
                    </span>
                  </div>
                </td>
                <td rowspan="2">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        из высоколегированных коррозионностойких сталей
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">условный</span>
                    </span>
                  </div>
                </td>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        минимальный
                      </span>
                    </span>
                  </div>
                </td>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        максимальный
                      </span>
                    </span>
                  </div>
                </td>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        сердечника
                      </span>
                    </span>
                  </div>
                </td>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">пряди</span>
                    </span>
                  </div>
                </td>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        повышенного качества
                      </span>
                    </span>
                  </div>
                </td>
                <td className={classes.td}>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        нормального качества
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="5" valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        6 ´ 7(1 + 6) + + 1 ´ 7(1 + 6)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,80</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,20</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,18</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,29</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">13,2</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2220 (227)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2150 (219)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        1605 (164)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        1,80<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,75</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,90</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,22</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,20</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">1,58</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">16,0</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2740 (280)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2640 (269)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        1965 (201)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2,20<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,15</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,35</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,26</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,24</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,27</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">23,7</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        3920 (400)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        3780 (386)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2945 (301)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,70</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,29</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,27</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,87</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">29,4</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        4900 (500)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        4780 (488)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        3820 (390)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        2,50<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">2,70</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,30</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,28</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">3,08</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">31,4</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        5190 (530)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        5130 (524)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        4105 (419)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td rowspan="12" valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        6 ´ 19(1 + 6 + 12) + 1 ´ 19(1 + 6 + 12)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">3,20</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">3,20</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">3,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,24</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,22</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,19</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">54,0</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        9075 (926)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        8900 (908)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        6910 (705)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        3,60<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">3,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">3,95</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,26</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,24</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">6,16</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">64,1</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        10750 (1100)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        9660 (986)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        8200 (835)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,29</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,27</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">7,79</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">81,2</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        13700(1400)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        12450 (1270)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        10350 (1055)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        4,50<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,45</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,90</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,32</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,30</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">9,59</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">97,8</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        16650 (1700)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        15000 (1530)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        12250 (1255)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,80</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">4,80</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,20</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,31</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,32</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">10,89</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">113,5</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        18950 (1935)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        18600 (1895)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        13950 (1425)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,36</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,34</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">12,28</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">129,3</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        20050 (2050)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        19250 (1960)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        15950(1625)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">6,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,38</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">15,32</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">159,6</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        25450 (2600)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        24900 (2540)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        19900 (2030)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        6,00<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">5,95</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">6,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,42</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">16,96</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">175,5</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        27400 (2800)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        26590 (2710)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        20900 (2130)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">6,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">6,40</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">6,80</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,46</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,42</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">18,95</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">197,5</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        31350 (3200)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        31200 (3180)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        23350 (2380)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        7,50<sup>*</sup>
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">7,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">8,10</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,53</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">26,58</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">277,0</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        41550 (4240)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        39550 (4040)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        32750 (3340)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">8,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">8,00</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">8,60</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,55</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,53</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">29,66</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">309,1</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        46300 (4725)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        44150 (4500)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        36550 (3730)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">9,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">9,50</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">10,20</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,65</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">0,63</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">41,84</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">436,0</span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        65400 (6675)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        64100 (6540)
                      </span>
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <span>
                      <span data-mega-font-name="montserrat">
                        51550 (5260)
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>`,
              }}
            ></div>
          ) : (
            ""
          )}
        </div>
      );
    } else if (tab === 3) {
      return (
        <div className={classes.bottom_tab_view}>
          <div style={{ maxWidth: "68vw" }}>
            {item == "1" ? (
              <div>
                {" "}
                <h4 style={{ fontWeight: "500" }}>
                  Условия работы и меры безопасности
                </h4>
                <br />
                <br />
                Для производства текстильных строп чаще всего используют ленту
                на основе полиэстера (PES). Стропы из данного материала имеют
                ограничение на применение по температурному режиму - не
                допускается использование текстильных строп при температуре выше
                80°С, минимальная температура для использования строп -60°С.{" "}
                <br />
                <br />
                При строповке груза и его подъеме рекомендуется избегать рывков
                и ударов/ При работе с максимальной нагрузкой допускается
                удлинение стропа не более 6%, вне зависимости от
                грузоподъемности. <br />
                <br />
                Для предохранения лент стропа от истирания они могут быть обшиты
                защитными оболочками, обеспечивающими дополнительную защиту
                лент, но не оказывающего влияния на разрывное усилие стропа.
                Строп может дополнительно комплектоваться защитными чехлами для
                транспортировки грузов с острой кромкой. <br />
                <br />
                При строповке груза со сложной геометрией необходимо учитывать
                расположение центра тяжести. <br />
                <br />
                <Image
                  src={img1_3}
                  alt="asd"
                  width={508}
                  height={577}
                  style={{ marginTop: "30px" }}
                />
              </div>
            ) : item == "2" ? (
              <div>
                Канатные стропы имеют определенные ограничения по температурному
                режиму работы. Стропы изготовленные из канатов с органическим
                сердечником допускается применять для подъема и транспортировки
                грузов, имеющих температуру не выше 100°С. Стропы изготовленные
                из канатов со стальным сердечником возможно использовать при
                работе с грузами, имеющими температуру не более 150°С, при
                работе с грузом имеющим температуру от 250°С до 400°С
                грузоподъемность стропов снижают на 25%. Канатные стропы заделка
                концов которого осуществлялась методом опрессовки алюминиевой
                втулкой применяются для подъема и транспортировки грузов,
                имеющих температуру не выше 150°С.
                <br />
                <br />
                При работе с грузами имеющими острые ребра рекомендуется
                размещать проставки из дерева, резины и аналогичных материалов,
                для предотвращения повреждения строп. Строповка груза с его
                свободной укладкой на петлевые стропы допускается только при
                наличии на грузе элементов, предотвращающих его смещение в
                продольном направлении.
                <Image
                  src={img2_4}
                  alt="asd"
                  width={276}
                  height={90}
                  style={{ marginTop: "30px" }}
                />
                <br />
                <br />
                <Image
                  src={img2_3}
                  alt="asd"
                  width={526}
                  height={705}
                  style={{ marginTop: "30px" }}
                />
                <br />
                <br />
                Запрещается работа при наличии видимых обрывов наружных проволок
                на участке 1 канатного стропа:
                <br />
                <ul style={{ marginLeft: "20px", paddingTop: "20px" }}>
                  <li className={classes.li}>
                    При l = 3dк, наличие видимых обрывов более 4;
                  </li>
                  <li className={classes.li}>
                    При l = 6dк, наличие видимых обрывов более 6;
                  </li>
                  <li className={classes.li}>
                    При l = 10dк, наличие видимых обрывов более 16;
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <BackShape text={"назад в каталог"} href={"back"}>
      <div className={classes.top}>
        {item == "1" ? (
          <Image
            className={classes.top_image}
            src={image_1}
            alt="asdasdad"
            width={611}
            height={461}
          />
        ) : item == "2" ? (
          <Image
            className={classes.top_image}
            src={image_2}
            alt="asdasdad"
            width={611}
            height={461}
          />
        ) : item == "3" ? (
          <Image
            className={classes.top_image}
            src={image_3}
            alt="asdasdad"
            width={611}
            height={461}
          />
        ) : (
          ""
        )}

        <div className={classes.top_content}>
          <div style={{ flex: "1" }}>
            {item == "1" ? (
              <h2 className={classes.top_content_h}>
                Строп текстильный <br /> петлевой СТП
              </h2>
            ) : item == "2" ? (
              <h2 className={classes.top_content_h}>
                Строп канатный <br /> двухветвевой 2СК
              </h2>
            ) : item == "3" ? (
              <h2 className={classes.top_content_h}>
                Авиационный канат <br />
                ГОСТ 2172-80
              </h2>
            ) : (
              ""
            )}

            {item == "1" ? (
              <p className={classes.top_content_p} style={{ maxWidth: "36vw" }}>
                Изг. по Ts 25709515 - 01 : 2017. Производство ООО "MOS STAL
                KANAT" Узбекистан Стропы из текстильной ленты российского
                производства.Производитель ленты располагается в Орле и входит в
                Группу компаний.
              </p>
            ) : item == "2" ? (
              <p className={classes.top_content_p}>
                Изготавливаем стропы из стального и оцинкованного каната. <br />
                Производство ООО "MOS STAL KANAT" Узбекистан. <br />
                Межгосударственный  ГОСТ 25573-82
                <br />
              </p>
            ) : item == "3" ? (
              <p className={classes.top_content_p} style={{ maxWidth: "74%" }}>
                Канат стальной авиационный ГОСТ 2172-80 Стальные канаты ГОСТ
                2172-80 применяют в авиационной и аэрокосмической отрасли в
                качестве канатов систем управления самолетов и вертолетов,
                различных малотоннажных грузовых лебедках, как тяговых так и с
                вертикальным подъемом.
              </p>
            ) : (
              ""
            )}
          </div>

          {item == "1" ? (
            <div className={classes.top_content_images}>
              <Image src={image1} alt="asda" />
              <Image src={image2} alt="asda" />
              <Image src={image3} alt="asda" />
              <Image src={image4} alt="asda" />
              <Image src={image5} alt="asda" />
              <Image src={image6} alt="asda" />
            </div>
          ) : item == "2" ? (
            <div className={classes.top_content_images}>
              <Image src={image11} alt="asda" />
              <Image src={image22} alt="asda" />
              <Image src={image33} alt="asda" />
              <Image src={image44} alt="asda" />
              <Image src={image55} alt="asda" />
              <Image src={image66} alt="asda" />
            </div>
          ) : (
            ""
          )}
          <div className={classes.top_content_btn}>
            <MakeApplication lng={lng} />
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottom_tabs}>
          <div
            onClick={() => setTab(1)}
            className={`${classes.bottom_tab} ${
              tab == 1 ? classes.bottom_tab_active : ""
            }`}
          >
            Описание
          </div>
          <div
            onClick={() => setTab(2)}
            className={`${classes.bottom_tab} ${
              tab == 2 ? classes.bottom_tab_active : ""
            }`}
          >
            Характеристики
          </div>
          {item == "3" ? (
            ""
          ) : (
            <div
              onClick={() => setTab(3)}
              className={`${classes.bottom_tab} ${
                tab == 3 ? classes.bottom_tab_active : ""
              }`}
            >
              Нормы браковки
            </div>
          )}
        </div>
        <Tabs />
      </div>
    </BackShape>
  );
}
