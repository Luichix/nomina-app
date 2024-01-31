import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { GiHistogram } from 'react-icons/gi';
import { MdOutlineHelp } from 'react-icons/md';
import { MdBackupTable } from 'react-icons/md';
import {
  AiOutlineAppstoreAdd,
  AiFillSetting,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { BsCashCoin, BsFileEarmarkPerson } from 'react-icons/bs';
import userPicture from '/public/user.png';
import Link from 'next/link';
import Image from 'next/image';

const Sidenav = ({
  nav,
  handleNav,
}: {
  nav: string;
  handleNav: () => void;
}) => {
  return (
    <div className={classNames(styles.sidenav, styles[nav])}>
      <div className={styles.list}>
        <Link href="/account" onClick={handleNav}>
          <div className={styles.profile}>
            <div className={classNames(styles.item)}>
              <Image alt="cover" src={userPicture} height={45} width={45} />
            </div>
            <div className={styles.link}>
              <h2 className={styles.displayName}>Luichix</h2>
              <p className={styles.displayEmail}>luichix@gmail.com</p>
            </div>
          </div>
        </Link>
        <hr className={styles.line}></hr>
        <Link href="/reports" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorGreen)}>
            <GiHistogram />
          </div>
          <div className={styles.link}>Reportes</div>
        </Link>
        <Link href="/personal" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorYellow)}>
            <BsFileEarmarkPerson />
          </div>
          <div className={styles.link}>Personal</div>
        </Link>
        <Link href="/hours" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorRed)}>
            <AiOutlineFieldTime />
          </div>
          <div className={styles.link}>Horas</div>
        </Link>
        <Link href="/consolidated" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorBlue)}>
            <MdBackupTable />
          </div>
          <div className={styles.link}>Consolidado</div>
        </Link>
        <Link href="/payroll" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorEsmerald)}>
            <BsCashCoin />
          </div>
          <div className={styles.link}>Planilla</div>
        </Link>
        <Link href="/complements" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorViolet)}>
            <AiOutlineAppstoreAdd />
          </div>
          <div className={styles.link}>Complementos</div>
        </Link>
        <Link href="/setting" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorGray)}>
            <AiFillSetting />
          </div>
          <div className={styles.link}>Configuración</div>
        </Link>
        <Link href="/help" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorSky)}>
            <MdOutlineHelp />
          </div>
          <div className={styles.link}>Ayuda</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
