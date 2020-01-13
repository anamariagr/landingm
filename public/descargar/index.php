<?php
require_once 'mobile.php';
$detect = new Mobile_Detect;
if($detect->isIphone()){
        echo ' <meta http-equiv="refresh" content="0;url=https://apps.apple.com/ar/app/meetwork-app/id1462502158">';

}else if($detect->isAndroid()){
        echo ' <meta http-equiv="refresh" content="0;url=https://play.google.com/store/apps/details?id=meetwork.app&hl=es">';
}else{
    echo ' <meta http-equiv="refresh" content="0;url=https://meetwork.co">';

}
