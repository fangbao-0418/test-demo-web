### react.js ��react�ĺ��Ŀ⣻react-dom.js���ṩ��DOM��صĹ�����window������reactDOM���ԣ�babel.js��JSX�﷨תΪjs�﷨
### ����script��ǩ����babel.jsʱ�� ��Ҫtype=text/babel
### ReactDOM.render ��react����������� ���ڽ���ǩģ��תΪHTML����,������ָ����DOM�ڵ�
### JSX�﷨{}js,<>html,styleΪcss;ע����ʽ����className ������class��Ϊ��js�ؼ���
### ������:�е������� �����ü��ж������ܿ����ڲ�ͬ���� ��ά����ֻ�����Լ����߼�
1. �����ĵ�һ����ĸ��д ����ֻ�ܰ���һ�������ǩ
2. ���������`var Message(�������)=React.createClass({render:function(){return }});ReactDOM.render(<Message/>,Ҫ�����DOM�ڵ�λ��)`
3. ���������: propTypes:{} ���崫�����Ե����ƺ�����;getDefaultProps:function(){} ����Ĭ������; this.props����ȡ������
* this.props.children��ʾ����������ӽڵ㣬React.Children.map���߷��� ʵ������ӳ��
4. state״̬: getInitialState�����ʼ״̬
* �����¼� �������¼� onKeyDown onKeyPress onKeyUp �����¼� onFocus onBlur �����¼� onChange onInput onSubmit ����¼� onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave
5. ��Ԫ��˫�����ݰ� `ע��: �������Ԫ��������value���ԣ������ָ��onChange�¼������������� ���ֶλ���ֻ��״̬`
6. �������
### �����������
