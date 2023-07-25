import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRightRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import FileIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { MyCollapse } from 'components';
import classes from './style.module.css';

const isEmpty = (item) => !item || !Object.keys(item).length;

const getIcon = (isOpen, children) =>
  isEmpty(children) ? (
    <FileIcon className={classes.icon} />
  ) : isOpen ? (
    <ExpandMoreIcon className={classes.icon} />
  ) : (
    <ChevronRightIcon className={classes.icon} />
  );

const File = ({ file: { name, children = [] }, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (!isEmpty(children)) {
      setIsOpen((isOpen) => !isOpen);
    }
  };

  const icon = getIcon(isOpen, children);

  return (
    <div>
      <div
        style={{ paddingLeft: level * 16 + 8 }}
        className={classes.name}
        onClick={toggleOpen}
      >
        {icon}
        {name}
      </div>

      {!isEmpty(children) && (
        <MyCollapse isOpen={isOpen}>
          {children.map((child) => (
            <File key={child.name} file={child} level={level + 1} />
          ))}
        </MyCollapse>
      )}
    </div>
  );
};

export default File;
