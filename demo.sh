pwd # 确认一下当前路径是不是 ~/local 或者 /c/Users/你的名字/local
if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo 'create success'
  echo '<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>' > index.html
  echo 'html written!'
  echo 'h1{color: red;}' > css/style.css
  echo 'css written!'
  echo 'var string = "Hello World"
alert(string)' > js/main.js
  echo 'js written!'
  exit
fi
demo && echo '结束'