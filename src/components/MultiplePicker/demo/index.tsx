/**
 * title: 基础 多选框
 * desc: 表单使用 demo
 */
import React, { FC } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import DynamicForm, { IFormItemProps, useForm, Store, ValidateErrorEntity } from '@alitajs/dform';

const Page: FC = () => {
  const [form] = useForm();
  const onFinish = (values: Store) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const foodList = [
    {
      label: '宫保鸡丁',
      value: '宫保鸡丁',
    },
    {
      label: '可乐鸡翅',
      value: '可乐鸡翅',
    },
    {
      label: '爆炒虾仁',
      value: '爆炒虾仁',
    },
    {
      label: '清蒸小黄鱼',
      value: '清蒸小黄鱼',
    },
    {
      label: '红烧肉',
      value: '红烧肉',
    },
  ];

  const formsData = [
    {
      type: 'multiplePicker',
      fieldProps: 'myFood',
      required: true,
      data: foodList,
      title: '我喜欢的食物',
      labelNumber: 7,
      placeholder: '请选择我喜欢的食物',
      onChange: (e: (string | number)[]) => {
        // eslint-disable-next-line no-console
        console.log(e);
      },
    },
    {
      type: 'multiplePicker',
      fieldProps: 'youFood',
      data: foodList,
      title: '选择你喜欢的食物(不可编辑)',
      disabled: true,
      placeholder: '请选择',
      positionType: 'vertical',
      maxValueLength: 1,
    },
  ] as IFormItemProps[];
  const formsValues = {
    youFood: ['红烧肉', '清蒸小黄鱼'],
  };
  const formProps = {
    onFinish,
    onFinishFailed,
    data: formsData,
    formsValues,
    form,
    autoLineFeed: false,
    isDev: true,
  };
  return (
    <>
      <DynamicForm {...formProps} />
      <WhiteSpace size="sm" />
      <Button type="primary" onClick={() => form.submit()}>
        Submit
      </Button>
    </>
  );
};

export default Page;
